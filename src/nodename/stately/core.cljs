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


(defn set-state-tree!
  [state-machines]
  (swap! app-db assoc :tree (state-tree state-machines :app)))

(defn tree
  []
  (:tree @app-db))



(defn parent-links
  [m root-key]
  (let [ks (keys m)
        kvs (interleave ks (repeat root-key))
        trees (map #(get m %) ks)
        sub-kvs (map #(parent-links %1 %2) trees ks)]
    (concat kvs sub-kvs)))

(defn make-parent-map
  []
  (let [kvs (parent-links (tree) nil)]
    (apply assoc {} (flatten kvs))))

(defn set-parent-map!
  []
  (swap! app-db assoc :parents (make-parent-map)))

(defn super
  "Given a state-key, return its superstate;
  given an fsm-key, return its super-fsm"
  [k]
  (let [parent-map (:parents @app-db)
        p (get parent-map k)]
    (get parent-map p)))



(defn- set-active
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
    (loop [path [state-kw]
           state state-kw]
      (if-let [parent (super state)]
        (recur (concat path [parent])
               parent)
        path))))


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
      (first (filter #(= (namespace %) (name fsm-name)) all-active-states)))))


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



(defn active-components
  "all active subcomponents of a state, leaves first"
  [state all-states]
  (let [state-data (get all-states state)
        components (:components state-data)
        active-substates (map active-state components)
        _ (warn "active-components: active substates: " active-substates)
        subcomponents (map #(active-components % all-states) active-substates)]
    (flatten (concat subcomponents components))))





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
  "Make a copy of fsm, replacing its namespace everywhere with ns"
  [fsm ns]
  (let [selector (s/walker keyword?)
        orig-ns (get-ns fsm)
        transform-fn #(transform-kw % orig-ns ns)]
    (s/transform selector transform-fn fsm)))


;; DISPATCH ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(declare dispatch)

(defn- super-dispatch
  [event-v]
  #_(warn "super-dispatch: event-v: " event-v)
  (let [event-id (first-in-vector event-v)
        trigger (second event-id)
        fsm-name (namespace trigger)
        super-fsm-name (super (keyword fsm-name))]
    #_(warn "super-fsm: " super-fsm-name)
    (when super-fsm-name
      (let [new-state (active-state super-fsm-name)
            new-trigger (transform-kw trigger fsm-name (name super-fsm-name))
            new-event-v (vec (concat [[new-state new-trigger]] (rest event-v)))]
        (dispatch new-event-v)))))


(defn synthetic?
  [event-v]
  (let [name (name (second (first-in-vector event-v)))]
    (= name "ENTRY-TRANSITION")))


;; TODO don't propagate up from multiple orthogonal components
(defn dispatch
  "If a handler is registered for the event-id, call re-frame's dispatch;
  otherwise, move up the state hierarchy and try again"
  [event-v]
  (warn "dispatch? " event-v)
  (if (nil? event-v)
    (re-frame.core/dispatch event-v) ;; let it fail as it should
    (let [event-id (first-in-vector event-v)
          handler-fn (lookup-handler event-id)]
      #_(warn "Q: " (peek (.-queue event-queue)))
      (if (nil? handler-fn)
        (if (synthetic? event-v)
          ;; don't propagate synthetic transition:
          (warn "synthetic transition not registered")
          (super-dispatch event-v))
        (do
          (warn "active states: " (active-states))
          (warn "dispatching: " event-v)
          (re-frame.core/dispatch event-v))))))


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


(defn show-state-error
  [[_ trigger] current-state]
  (when (not= trigger :alert/on)
    (dispatch [:alert/show-action {:title "State error"
                                   :body (str "Transition " trigger
                                              " could not be performed from state "
                                              current-state)}])))
