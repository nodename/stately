(ns nodename.stately.core
  (:require [clojure.string :refer [blank?]]
            [com.rpl.specter :as s]
            [re-frame.core :refer [dispatch]]
            [re-frame.utils :refer [error]]
            [re-frame.handlers :refer [lookup-handler]]
            [nodename.stately.tree :refer [super
                                           active-states
                                           set-active-states!
                                           set-state-tree!]]
            [nodename.stately.chart :refer [get-start-state
                                            enter-state
                                            register-statechart]]))



;; CLONE FSM ;;;;;;;;;;;;;;;;;;;;



(defn- get-ns
  [fsm]
  (namespace (first (keys (:states fsm)))))

(defn- transform-kw
  [kw orig-ns ns]
  (if (= (namespace kw) orig-ns)
    (keyword ns (name kw))
    kw))

(defn clone-fsm
  "Make a copy of fsm, replacing its namespace in every keyword with ns"
  [fsm ns]
  (let [selector (s/walker keyword?)
        orig-ns (get-ns fsm)
        transform-fn #(transform-kw % orig-ns ns)]
    (s/transform selector transform-fn fsm)))



;; DISPATCH ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- leaves-of-active
  "Currently active states that have no currently active child states"
  []
  (loop [active (active-states)
         leaves []]
    (let [s (first active)]
      (if (nil? s)
        leaves
        (let [s-has-child? (some #(= s (super %)) (rest active))]
          (recur (rest active)
                 (if s-has-child?
                   leaves
                   (conj leaves s))))))))


(defn- bubble-up
  "Find first ancestor state for which the transition key [state trigger] is registered"
  [state trigger]
  (loop [state state]
    (if (or (nil? state)
            (lookup-handler [state trigger]))
      state
      (recur (super state)))))


(defn dispatch-transition
  "Bubble up the state hierarchy from the leaf active states
  to states that implement the transition, and dispatch"
  [event-v]
  (let [trigger (first event-v)
        bubble-states (->> (leaves-of-active)
                           (map #(bubble-up % trigger))
                           (remove #(nil? %))
                           ;; remove duplicates:
                           set)]
    (doseq [state bubble-states]
      (let [new-event-v (vec (concat [[state trigger]] (rest event-v)))]
        (dispatch new-event-v)))))



;; MAIN ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- merge-no-clobber
  "Merge the maps but go nuts if a key is repeated"
  [& maps]
  (let [f (fn [val0 val1] (error "Clobbering a handler! " val0 " " val1))]
    (apply merge-with f maps)))


(defn start-app
  [middleware state-machines root-fsm-key]
  (set-state-tree! state-machines root-fsm-key)

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

    (register-statechart middleware chart-data)

    (let [app-start-state (get-start-state root-fsm-key all-start-states)
          active-states (enter-state app-start-state
                                     [] #{} chart-data)]
      (set-active-states! active-states))))
