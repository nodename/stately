(ns nodename.stately.statechart
  (:require [clojure.string :refer [blank?]]
            [re-frame.core :as re-frame :refer [register-handler]]
            [re-frame.utils :refer [log warn error first-in-vector]]
            [com.rpl.specter :as s]
            [cljs.pprint :refer [pprint]]
            [nodename.stately.core :refer [dispatch
                                           init-active
                                           set-active active-state
                                           set-state-tree
                                           show-state-error]]))





;; ACTIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn register-action-handlers
  [middleware {:keys [all-actions] :as chart-data}]
  (let [all-actions (merge all-actions)]
    (doseq [[trigger action] all-actions]
      (register-handler trigger
                        middleware
                        (if (fn? action)
                          action
                          ;; vector: fn and args:
                          (fn [db values]
                            ((first action)
                              db (concat (rest action) values))))))))



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
  (doseq [[trigger state] all-states]
    (let [{activities :activities
           :or {:activities []}} state]
      (doseq [activity activities]
        (let [{start :start
               stop :stop} (get all-activities activity)]
          (when start
            (let [action (start-action activity)]
              (register-handler action
                                middleware
                                (fn [db]
                                  (dispatch start)
                                  db))))
          (when stop
            (let [action (stop-action activity)]
              (register-handler action
                                middleware
                                (fn [db]
                                  (dispatch stop)
                                  db)))))))))



;; TRANSITIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn start-activities
  [state-data]
  (doseq [activity (:activities state-data)]
    (dispatch [(start-action activity)])))

(defn show-condition-not-met
  [trigger current-state condition]
  (log (str "Transition " trigger
            " in state " current-state
            " failed condition " condition)))


(defn complete-transition
  "This is available as an api function for transitions
  whose target state was not known in advance,
  for example when popping the navigator stack"
  [new-state new-state-data]
  (set-active new-state true)
  (start-activities new-state-data))


(defn component->exit-action
  [component]
  [[:any (keyword (name component) "EXIT-TRANSITION")]])

(defn component->entry-action
  [component]
  [[:none (keyword (name component) "ENTRY-TRANSITION")]])


(defn perform-transition
  [db state-and-trigger transition current-state values all-states]
  (warn "PERFORMING " state-and-trigger " current-state: " current-state)
  (let [{target :target
         actions :actions
         :or {actions []}} transition

        ;; handle target that is a function:
        target (if (fn? target)
                 (target db values)
                 target)

        current-state-data (get all-states current-state)
        target-state-data (get all-states target)

        current-state-stop-activity-actions (map stop-action (:activities current-state-data))

        current-state-exit-actions (get current-state-data :exit-actions)

        current-state-components-exit-actions (map component->exit-action
                                                   (get current-state-data :components))

        target-state-entry-actions (get target-state-data :entry-actions)

        target-state-components-entry-actions (map component->entry-action
                                                   (get target-state-data :components))

        ;; include exit and entry actions:
        ;; atomic change of state: exit actions followed immediately by entry actions;
        ;; explicit actions take place in the context of the target state
        actions (concat current-state-stop-activity-actions
                        current-state-components-exit-actions
                        current-state-exit-actions
                        target-state-entry-actions
                        target-state-components-entry-actions
                        actions)]

    (when (not= target :internal)
      (set-active current-state false))

    ;; each action gets my values appended after any explicit values it carries:
    (doseq [action actions]
      (let [action (if values
                     (vec (concat action values))
                     action)]
        (dispatch action)))

    (when (and target
               (not= target :internal))
      (warn "perform: completing target: " target)
      (complete-transition target target-state-data))
    db))


(defn state-eligible?
  [current-state start-state]
  (println "current state:" current-state " start state: " start-state)
  (or (and (= :none start-state)
           (or (blank? current-state) (= "none" (name current-state))))
      (= :any start-state)
      (= current-state start-state)))


(defn make-transition-handler
  [all-states]
  (fn [state-and-trigger transition]
    (warn "MTH: state-and-trigger: " state-and-trigger)

    (fn [db & [values]]
      (warn "state-and-trigger: " state-and-trigger)
      (let [transition-state (first state-and-trigger)
            trigger (second state-and-trigger)
            fsm-name (or (namespace transition-state)
                         (namespace trigger))
            current-state (active-state fsm-name)]
        (warn "MTH: transition-state: " transition-state " current-state: " current-state)

        (let [eligible? (state-eligible? current-state transition-state)

              {condition :condition
               :or {condition (constantly true)}} transition]
          (warn "MTH: transition: " transition)
          (warn "MTH: eligible? " eligible?)
          (if (and eligible?
                   (condition db values))
            (perform-transition db state-and-trigger transition
                                current-state values all-states)
            (do
              #_(show-state-error state-and-trigger current-state)
              db)))))))


(defn add-entry-transition
  [acc start-state]
  (let [trigger (keyword (namespace start-state) "ENTRY-TRANSITION")
        transition {:target start-state}]
    (merge acc {[:none trigger] transition})))

(defn make-entry-transitions
  "Create a synthetic entry transition for each state machine
  that will cause it to go into its declared start-state"
  [all-start-states]
  (reduce add-entry-transition {} all-start-states))

(defn add-exit-transition
  [acc state-entry]
  (warn "add-exit-transition: " state-entry)
  (let [state-data (second state-entry)
        components (get state-data :components)]
    (if components
      (let [triggers (map #(keyword (name %) "EXIT-TRANSITION") components)
            transitions (map (fn [c] {:target (keyword (name c) "none")}) components)
            kvs (into {} (map (fn [trigger transition] [[:any trigger] transition])
                              triggers transitions))]
        (warn "add-exit-transition: kvs: " kvs)
        (merge acc kvs))
      acc)))

(defn make-exit-transitions
  "Create a synthetic exit transition for each state machine
  that will nullify its current state
  for superstate exit to invoke on its components
  (revisit when implementing history)"
  [all-states]
  (reduce add-exit-transition {} all-states))


(defn register-transition-handlers
  [middleware {:keys [all-transitions all-states all-start-states]}]
  (println "RTH")
  (let [make-transition-handler (make-transition-handler all-states)
        entry-transitions (make-entry-transitions all-start-states)
        exit-transitions (make-exit-transitions all-states)
        all-transitions (merge all-transitions entry-transitions exit-transitions)]
    (doseq [[trigger transition] all-transitions]
      (let [transitions [transition]
            make-transition-handler #(make-transition-handler trigger %)
            handler (apply comp (map make-transition-handler transitions))]
        (register-handler trigger
                          middleware
                          handler)))))


;; MAIN ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn- merge-no-clobber
  "Merge the maps but go nuts if a key is repeated"
  [& maps]
  (let [f (fn [val0 val1] (error "Clobbering a handler! " val0 " " val1))]
    (apply merge-with f maps)))

(defn- merge-with-concat
  [& maps]
  (let [f (fn [val0 val1] [val0 val1])]
    (apply merge-with f maps)))


(defn register-handlers
  [middleware state-machines]
  (let [fsms (vals state-machines)
        obtain (fn [prop]
                 (apply merge-no-clobber
                        (map #(get % prop) fsms)))

        all-actions (obtain :actions)
        all-activities (obtain :activities)
        all-transitions (apply merge-with-concat
                               (map #(get % :transitions) fsms))
        all-states (obtain :states)
        all-start-states (remove nil? (map #(get % :start-state) fsms))

        chart-data {:all-actions all-actions
                    :all-activities all-activities
                    :all-transitions all-transitions
                    :all-states all-states
                    :all-start-states all-start-states}]

    (set-state-tree state-machines)
    (init-active)

    (register-action-handlers middleware chart-data)
    (register-activity-handlers middleware chart-data)
    (register-transition-handlers  middleware chart-data)))
