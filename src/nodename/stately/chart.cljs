(ns nodename.stately.chart
  (:require [nodename.stately.comms :refer [register-handler dispatch]]
            [nodename.stately.tree :refer [lca-path]]))


(defn- set-active
  "return modified set of active states"
  [active-states state-key yesno]
  ((if yesno conj disj) active-states state-key))

(defn- active-state
  [fsm active-states]
  (when fsm
    (some #(when (= (namespace %) (name fsm)) %) active-states)))



;; ACTIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- register-action-handlers
  [middleware {:keys [all-actions] :as chart-data}]
  (doseq [[trigger action] all-actions]
    (let [handler (if (fn? action)
                    action
                    ;; vector: fn and args:
                    (fn [db values]
                      ((first action)
                        db (concat (rest action) values))))]
      (register-handler trigger middleware handler))))



;; ACTIVITIES ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- start-action
  "Create an action keyword for starting an activity"
  [activity]
  (keyword (namespace activity)
           (str (name activity) ".START-ACTION")))

(defn- stop-action
  "Create an action keyword for stopping an activity"
  [activity]
  (keyword (namespace activity)
           (str (name activity) ".STOP-ACTION")))

(defn- register-activity-handlers
  [middleware {:keys [all-states all-activities] :as chart-data}]
  (doseq [[_ state-data] all-states]
    (let [{activities :activities
           :or {:activities []}} state-data]
      (doseq [activity activities]
        (let [{start :start
               stop :stop} (get all-activities activity)]
          (when start
            (let [trigger (start-action activity)]
              (register-handler trigger
                                middleware
                                (fn [db]
                                  (dispatch start)
                                  db))))
          (when stop
            (let [trigger (stop-action activity)]
              (register-handler trigger
                                middleware
                                (fn [db]
                                  (dispatch stop)
                                  db)))))))))



;; TRANSITIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- show-condition-not-met
  [trigger current-state condition]
  (println (str "Transition " trigger
                " in state " current-state
                " failed condition " condition)))


;;; EXIT ;;;


(defn- active-subcomponents
  "all active subcomponents of a state, leaves first"
  [state all-states active-states]
  (let [state-data (get all-states state)
        components (:components state-data)
        active-substates (map #(active-state % active-states) components)
        subcomponents (map #(active-subcomponents % all-states active-states) active-substates)]
    (flatten (concat subcomponents components))))


(defn- stop-activities
  [state-data]
  (let [actions (map stop-action (:activities state-data))]
    (doseq [action actions]
      (dispatch action)))) ;; TODO invoke directly

(defn- perform-exit-actions
  [state-data]
  (let [actions (:exit-actions state-data)]
    (doseq [action actions]
      (dispatch action)))) ;; TODO invoke directly

(declare exit-state)

(defn- exit-all-substates
  "Exit active states of all subcomponents of state, starting from the leaves"
  [state all-states active-states]
  (let [components (active-subcomponents state all-states active-states)]
    (let [f (fn [active-states component]
              (let [substate (active-state component active-states)]
                (if substate
                  (exit-state substate all-states active-states)
                  active-states)))]
      (reduce f active-states components))))

(defn- exit-state
  [state all-states active-states]
  (let [state-data (get all-states state)
        active-states (exit-all-substates state all-states active-states)]
    (stop-activities state-data)
    (perform-exit-actions state)
    (set-active active-states state false)))


;;; ENTER ;;;

(defn get-start-state
  [fsm-key all-start-states]
  (some #(when (= (namespace %) (name fsm-key)) %) all-start-states))


(defn- perform-entry-actions
  [state-data values]
  (let [actions (:entry-actions state-data)]
    (doseq [action actions]
      (dispatch (vec (concat action values)))))) ;; TODO invoke directly

(defn- start-activities
  [state-data]
  (let [actions (map start-action (:activities state-data))]
    (doseq [action actions]
      (dispatch action)))) ;; TODO invoke directly

(declare enter-state)

(defn- enter-components-start-states
  [state active-states {:keys [all-states all-start-states] :as chart-data}]
  (let [state-data (get all-states state)
        components (get state-data :components)]
    (let [f (fn [active-states component]
              (let [start-state (get-start-state component all-start-states)]
                (if start-state
                  (enter-state start-state
                               [] active-states chart-data)
                  active-states)))]
      (reduce f active-states components))))

(defn enter-state
  [state values active-states {:keys [all-states] :as chart-data}]
  (let [state-data (get all-states state)
        active-states (set-active active-states state true)]
    (perform-entry-actions state-data values)
    (start-activities state-data)
    (enter-components-start-states state active-states chart-data)))


(defn- make-transition-handler
  [state-and-trigger transition {:keys [all-states] :as chart-data}]
  (fn handler [db & [values]]
    (let [[current-state _] state-and-trigger
          {condition :condition
           :or {condition (constantly true)}} transition]

      (if-not (condition db values)
        (do
          (show-condition-not-met state-and-trigger current-state condition)
          db)
        (let [{target :target
               actions :actions
               :or {actions []}} transition

              ;; handle computed target:
              target (if (fn? target)
                       (target db values)
                       target)

              [exit-path entry-path] (lca-path current-state target)

              ;; each action gets my values appended after any explicit values it carries:
              actions (map #(if values
                             (vec (concat % values))
                             %) actions)

              active-states (get db :active-states)

              ;; exiting the last state will first exit all of its active substates,
              ;; including any preceding states in exit-path:
              active-states (exit-state (last exit-path) all-states active-states)

              active-states (reduce (fn [active-states state]
                                      (enter-state state
                                                   values active-states chart-data))
                                    active-states
                                    entry-path)]

          ;; Unlike in the UML spec, we invoke actions associated with the transition
          ;; in the context of the target state:
          (doseq [action actions]
            (dispatch action))

          (assoc db :active-states active-states))))))



(defn- register-transition-handlers
  [middleware {:keys [all-transitions] :as chart-data}]
  (doseq [[trigger transition] all-transitions]
    (let [handler (make-transition-handler trigger transition chart-data)]
      (register-handler trigger
                        middleware
                        handler))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn register-statechart
  [middleware chart-data]
  (register-action-handlers middleware chart-data)
  (register-activity-handlers middleware chart-data)
  (register-transition-handlers  middleware chart-data))
