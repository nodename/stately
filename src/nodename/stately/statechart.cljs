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
  [(keyword (name component) "EXIT-TRANSITION")])

(defn component->entry-action
  [component]
  [(keyword (name component) "ENTRY-TRANSITION")])


(defn perform-transition
  [db trigger transition current-state values all-states]
  (warn "PERFORMING " trigger)
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
      (complete-transition target target-state-data))
    db))


(defn state-eligible?
  [current-state start-states]
  (or (and (= :none start-states)
           (or (blank? current-state) (= "none" (name current-state))))
      (and (= :any start-states)
           (not (blank? current-state)))
      (and (vector? start-states)
           (some #{current-state} start-states))))


(defn make-transition-handler
  [all-states]
  (fn [trigger transition]
    (let [{branches :branches} transition
          common-props (dissoc transition :branches)]

      (fn [db & [values]]
        (let [current-state (active-state (namespace trigger))]
          (warn "MTH: current-state: " current-state)

          ;; Either the transition is simple or it has a set of branch transitions:
          (let [transitions (or branches [transition])]
            (loop [transitions transitions]
              (if-let [transition (first transitions)]
                (let [transition (merge common-props transition)
                      start-states (get transition :start-states)
                      eligible? (state-eligible? current-state start-states)

                      {condition :condition
                       :or {condition (constantly true)}} transition]
                  (warn "MTH: transition: " transition)
                  (if (and eligible?
                           (condition db values))
                    (perform-transition db trigger transition
                                        current-state values all-states)
                    (recur (rest transitions))))

                ;; no more transitions left to try:
                (do
                  (show-state-error trigger current-state)
                  db)))))))))


(defn add-entry-transition
  [acc start-state]
  (let [trigger (keyword (namespace start-state) "ENTRY-TRANSITION")
        transition {:start-states :none
                    :target start-state}]
    (merge acc {trigger transition})))

(defn make-entry-transitions
  "Create a synthetic entry transition for each state machine
  that will cause it to go into its declared start-state"
  [all-start-states]
  (reduce add-entry-transition {} all-start-states))

(defn add-exit-transition
  [acc state-entry]
  (let [state-data (second state-entry)
        components (get state-data :components)]
    (if components
      (let [triggers (map #(keyword (name %) "EXIT-TRANSITION") components)
            transitions (map (fn [c] {:start-states :any
                                      :target (keyword (name c) "none")}) components)
            kvs (into {} (map (fn [trigger transition] [trigger transition])
                              triggers transitions))]
        (merge acc kvs))
      acc)))

(defn make-exit-transitions
  "Create a synthetic exit transition for each state machine
  that will nullify its current state
  so that superstate exit can call this on its components
  (revisit when implementing history)"
  [all-states]
  (reduce add-exit-transition {} all-states))


(defn register-transition-handlers
  [middleware {:keys [all-transitions all-states all-start-states]}]
  (let [make-transition-handler (make-transition-handler all-states)
        entry-transitions (make-entry-transitions all-start-states)
        exit-transitions (make-exit-transitions all-states)
        all-transitions (merge all-transitions entry-transitions exit-transitions)]
    (doseq [[trigger transition] all-transitions]
      (let [transitions (if (vector? transition) transition [transition])
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
