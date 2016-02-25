(ns nodename.stately.statechart
  (:require [re-frame.core :refer [register-handler dispatch]]
            [re-frame.utils :refer [error]]
            [nodename.stately.core :refer [init-active!
                                           set-active! active-state
                                           set-state-tree!
                                           lca-path]]))



;; ACTIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn register-action-handlers
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

(defn register-activity-handlers
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



(defn show-condition-not-met
  [trigger current-state condition]
  (println (str "Transition " trigger
            " in state " current-state
            " failed condition " condition)))


;;; EXIT ;;;


(defn active-subcomponents
  "all active subcomponents of a state, leaves first"
  [state all-states]
  (let [state-data (get all-states state)
        components (:components state-data)
        active-substates (map active-state components)
        subcomponents (map #(active-subcomponents % all-states) active-substates)]
    (flatten (concat subcomponents components))))


(defn stop-activities
  [state-data]
  (let [actions (map stop-action (:activities state-data))]
    (doseq [action actions]
      (dispatch action)))) ;; TODO invoke directly

(defn perform-exit-actions
  [state-data]
  (let [actions (:exit-actions state-data)]
    (doseq [action actions]
      (dispatch action)))) ;; TODO invoke directly

(declare exit-state)

(defn exit-all-substates
  "Exit active states of all subcomponents of state, starting from the leaves"
  [state all-states]
  (let [subcomponents (active-subcomponents state all-states)]
    (doseq [component subcomponents]
      (let [substate (active-state component)]
        (exit-state substate all-states)))))

(defn exit-state
  [state all-states]
  (let [state-data (get all-states state)]
    (exit-all-substates state all-states)
    (stop-activities state-data)
    (perform-exit-actions state)
    (set-active! state false)))


;;; ENTER ;;;


(defn perform-entry-actions
  [state-data values]
  (let [actions (:entry-actions state-data)]
    (doseq [action actions]
      (dispatch (vec (concat action values)))))) ;; TODO invoke directly

(defn start-activities
  [state-data]
  (let [actions (map start-action (:activities state-data))]
    (doseq [action actions]
      (dispatch action)))) ;; TODO invoke directly

(declare enter-state)

(defn enter-components-start-states
  [state {:keys [all-states all-start-states] :as chart-data}]
  (let [state-data (get all-states state)
        components (get state-data :components)]
    (doseq [component components]
      (when-let [start-state (some #(when (= (namespace %) (name component)) %) all-start-states)]
        (enter-state start-state [] chart-data)))))

(defn enter-state
  [state values {:keys [all-states] :as chart-data}]
  (let [state-data (get all-states state)]
    (set-active! state true)
    (perform-entry-actions state-data values)
    (start-activities state-data)
    (enter-components-start-states state chart-data)))


(defn make-transition-handler
  [state-and-trigger transition {:keys [all-states] :as chart-data}]
  (fn handler [db & [values]]
    (let [[transition-state _] state-and-trigger
          fsm-name (namespace transition-state)
          current-state (active-state fsm-name)]
      (let [{condition :condition
             :or {condition (constantly true)}} transition]
        (if-not (condition db values)
          (show-condition-not-met state-and-trigger current-state condition)
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
                               %) actions)]

            ;; exiting the last state will first exit all of its active substates,
            ;; including any preceding states in exit-path:
            (exit-state (last exit-path) all-states)

            (doseq [state entry-path]
              (enter-state state values chart-data))

            ;; Unlike in the UML spec, we invoke actions in the context of the target state:
            (doseq [action actions]
              (dispatch action))))
        db))))



(defn register-transition-handlers
  [middleware {:keys [all-transitions] :as chart-data}]
  (doseq [[trigger transition] all-transitions]
    (let [handler (make-transition-handler trigger transition chart-data)]
      (register-handler trigger
                        middleware
                        handler))))


;; MAIN ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn- merge-no-clobber
  "Merge the maps but go nuts if a key is repeated"
  [& maps]
  (let [f (fn [val0 val1] (error "Clobbering a handler! " val0 " " val1))]
    (apply merge-with f maps)))


(defn register-statechart
  [middleware state-machines root-fsm-key]
  (let [fsms (vals state-machines)
        obtain (fn [prop]
                 (apply merge-no-clobber
                        (map #(get % prop) fsms)))

        all-actions (obtain :actions)
        all-activities (obtain :activities)
        all-transitions (obtain :transitions)
        all-states (obtain :states)
        all-start-states (remove nil? (map #(get % :start-state) fsms))

        chart-data {:all-actions all-actions
                    :all-activities all-activities
                    :all-transitions all-transitions
                    :all-states all-states
                    :all-start-states all-start-states}]

    (let [app-start-state (some #(when (= (namespace %) (name root-fsm-key)) %) all-start-states)]
      ;; provide start-app function to kick things off:
      (def start-app #(enter-state app-start-state [] chart-data)))

    (set-state-tree! state-machines root-fsm-key)
    (init-active!)

    (register-action-handlers middleware chart-data)
    (register-activity-handlers middleware chart-data)
    (register-transition-handlers  middleware chart-data)))
