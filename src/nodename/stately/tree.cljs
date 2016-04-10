(ns nodename.stately.tree
  (:require [nodename.stately.comms :refer [app-db]]))


;; TREE ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



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



;; ACTIVE STATES ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn active-states
  []
  (get @app-db :active-states))

(defn set-active-states!
  [states]
  (swap! app-db assoc :active-states states))



;; LEAST COMMON ANCESTOR ;;;;;;;;;;;;;;;;;;;;;;;;;



(defn- path-to-root
  [state-kw]
  (if (nil? state-kw)
    []
    (concat [state-kw] (path-to-root (super state-kw)))))


(defn lca-path
  "Return states-to-exit and states-to-enter,
  which constitute the path from from-state to to-state
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