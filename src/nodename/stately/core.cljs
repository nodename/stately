(ns nodename.stately.core
  (:require [clojure.string :refer [blank?]]
            [com.rpl.specter :as s]
            [re-frame.core]
            [re-frame.db :refer [app-db]]
            [re-frame.handlers :refer [lookup-handler]]
            [re-frame.router :refer [event-queue]]
            [re-frame.utils :refer [log warn error first-in-vector]]))


(defn init-active!
  []
  (swap! app-db assoc :active #{}))

(defn state-tree
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


(defn parent-links
  [m root-key]
  (let [ks (keys m)
        kvs (interleave ks (repeat root-key))
        trees (map #(get m %) ks)
        sub-kvs (map #(parent-links %1 %2) trees ks)]
    (flatten (concat kvs sub-kvs))))

(defn parent-map
  [tree]
  (let [kvs (parent-links tree nil)]
    (apply assoc {} kvs)))

(defn set-state-tree!
  [state-machines]
  (let [tree (state-tree state-machines :app)
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

(defn active?
  [state-key]
  ((get @app-db :active) state-key))

(defn active-states
  []
  (remove #(= (name %) "none") (get @app-db :active)))




;; LEAST COMMON ANCESTOR ;;;;;;;;;;;;;;;;;;;;;;;;;



(defn path-to-root
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



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn active-state
  [fsm-name]
  (when fsm-name
    (let [all-active-states (:active @app-db)]
      (some #(when (= (namespace %) (name fsm-name)) %) all-active-states))))


(defn- leaf-states*
  [tree]
  (let [children (keys tree)]
    (loop [children children
           leaf-nodes []]
      (let [child (first children)
            subtree (get tree child)]
        (if child
          (recur (rest children)
                 (concat leaf-nodes (if subtree
                                      (leaf-states* subtree)
                                      [child])))
          leaf-nodes)))))

(defn leaf-states
  []
  (leaf-states* (tree)))

(defn active-leaf-states
  []
  (filter active? (leaf-states)))



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



(defn- super-event-v
  [event-v]
  (let [event-id (first-in-vector event-v)
        trigger (second event-id)
        fsm-name (namespace trigger)
        super-fsm-name (super (keyword fsm-name))]
    (when super-fsm-name
      (let [new-state (active-state super-fsm-name)
            new-trigger (transform-kw trigger fsm-name (name super-fsm-name))]
        (vec (concat [[new-state new-trigger]] (rest event-v)))))))


;; TODO don't propagate up from multiple orthogonal components
(defn dispatch
  "If a handler is registered for the event-id, call re-frame's dispatch;
  otherwise, move up the state hierarchy and try again"
  [event-v]
  (loop [event-v event-v]
    (warn "dispatch? " event-v)
    (if (nil? event-v)
      (warn "no handler found for event")
      (let [handler-fn (lookup-handler (first-in-vector event-v))]
        (if (nil? handler-fn)
          (recur (super-event-v event-v))
          (do
            (warn "active states: " (active-states))
            (warn "dispatching: " event-v)
            (re-frame.core/dispatch event-v)))))))


;; TODO this should become the default dispatch function
(defn dispatch-to-leaves
  [event-v]
  (warn "leaves: event-v: " event-v)
  (warn "active: " (active-leaf-states))
  (let [leaf-states (active-leaf-states)]
    (doseq [leaf-state leaf-states]
      (let [leaf-fsm (namespace leaf-state)
            new-event-id (keyword leaf-fsm (name (first-in-vector event-v)))
            new-event-v (vec (concat [[leaf-state new-event-id]] (rest event-v)))]
        (dispatch new-event-v)))))

