(ns nodename.stately.core
  (:require [clojure.string :refer [blank?]]
            [com.rpl.specter :as s]
            [re-frame.core :refer [dispatch]]
            [re-frame.db :refer [app-db]]
            [re-frame.handlers :refer [lookup-handler]]))


(defn init-active!
  []
  (swap! app-db assoc :active #{}))

(defn- state-tree
  [state-machines root-fsm-key]
  (let [;; component-keys: return the components of the state `state-key` in `fsm`
        component-keys (fn [state-key fsm]
                         (let [state (get (:states fsm) state-key)]
                           (:components state)))

        component-state-trees (fn [state-key fsm]
                                (mapv #(state-tree state-machines %)
                                      (component-keys state-key fsm)))

        key-and-components (fn [state-key fsm]
                             {state-key (apply merge (component-state-trees state-key fsm))})

        root-fsm (get state-machines root-fsm-key)
        root-fsm-states (:states root-fsm)]
    {root-fsm-key (apply merge (map #(key-and-components % root-fsm)
                                    (keys root-fsm-states)))}))


(defn- parent-links
  [m root-key]
  (let [ks (keys m)
        kvs (interleave ks (repeat root-key))
        trees (map #(get m %) ks)
        sub-kvs (map #(parent-links %1 %2) trees ks)]
    (flatten (concat kvs sub-kvs))))

(defn- parent-map
  [tree]
  (let [kvs (parent-links tree nil)]
    (apply assoc {} kvs)))

(defn set-state-tree!
  [state-machines root-fsm-key]
  (let [tree (state-tree state-machines root-fsm-key)
        parents (parent-map tree)]
    (swap! app-db assoc
           :tree tree
           :parents parents)))

(defn tree
  []
  (:tree @app-db))


(defn super
  "Given a state-key, return its superstate;
  given an fsm-key, return its super-fsm"
  [k]
  (let [parent-map (:parents @app-db)
        p (get parent-map k)]
    (get parent-map p)))



(defn set-active!
  [state-key yesno]
  (swap! app-db update-in [:active] (if yesno conj disj) state-key))

(defn active-states
  []
  (get @app-db :active))

(defn active-state
  [fsm]
  (when fsm
    (some #(when (= (namespace %) (name fsm)) %) (active-states))))

(defn active?
  [state-key]
  ((active-states) state-key))

(defn leaves-of-active
  "Currently active states that have no currently active child states"
  []
  (loop [active (active-states)
         leaves []]
    (let [s (first active)]
      (if (nil? s)
        leaves
        (let [child-of-s (some #(when (= s (super %)) %) (rest active))]
          (recur (rest active)
                 (if child-of-s [] [s])))))))



;; LEAST COMMON ANCESTOR ;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- path-to-root
  [state-kw]
  (if (nil? state-kw)
    []
    (concat [state-kw] (path-to-root (super state-kw)))))


(defn lca-path
  "Return states-to-exit and states-to-enter
  to get from from-state to to-state
  via least common ancestor"
  [from-state to-state]
  (cond (= :internal to-state) [[] []]
        (= from-state to-state) [[from-state] [to-state]]
        :else (let [exit-path (reverse (path-to-root from-state))
                    entrance-path (reverse (path-to-root to-state))]
                (loop [exit exit-path
                       entrance entrance-path]
                  (if (and (first exit)
                           (= (first exit) (first entrance)))
                    (recur (rest exit) (rest entrance))
                    [(reverse exit) entrance])))))



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



(defn- bubble-up
  "Find first ancestor state for which the transition [state trigger] is registered"
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

