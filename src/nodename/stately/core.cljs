(ns nodename.stately.core
  (:require [clojure.string :refer [blank?]]
            [com.rpl.specter :as s]
            [re-frame.core]
            [re-frame.db :refer [app-db]]
            [re-frame.handlers :refer [lookup-handler]]
            [re-frame.utils :refer [log warn error first-in-vector]]))


(defn init-active
  []
  (swap! app-db assoc :active #{}))

(defn state-tree
  [state-machines root-fsm-key]
  (let [component-keys (fn [state-key fsm]
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


(defn set-state-tree
  [state-machines]
  (swap! app-db assoc :tree (state-tree state-machines :app)))

(defn tree
  []
  (:tree @app-db))

(defn- set-active
  [state-key yesno]
  (swap! app-db update-in [:active] (if yesno conj disj) state-key))

(defn active?
  [state-key]
  ((get @app-db :active) state-key))

(defn active-states
  []
  (remove #(= (name %) "none") (get @app-db :active)))


(defn- parent
  "Find the parent of child-key in tree"
  ([tree child-key]
   (parent nil tree child-key))
  ([ancestor-key tree child-key]
   (let [children (keys tree)]
     (let [key-in-children? ((set children) child-key)]
       (if key-in-children?
         ancestor-key
         (loop [children children]
           (when-let [child (first children)]
             (let [subtree (get tree child)]
               (if-let [superstate (parent child subtree child-key)]
                 superstate
                 (recur (rest children)))))))))))

(defn super
  "Given a state-key, return its superstate;
  given an fsm-key, return its super-fsm"
  [k]
  (let [m (:tree @app-db)
        p (parent m k)]
    (parent m p)))


(defn active-state
  [fsm-name]
  (warn "active-state: fsm-name: " fsm-name)
  (when fsm-name
    (let [active-states (:active @app-db)]
      (first (filter #(= (namespace %) (name fsm-name)) active-states)))))


(defn leaf-states
  [tree]
  (let [children (keys tree)]
    (loop [children children
           leaf-nodes []]
      (let [child (first children)
            subtree (get tree child)]
        (if child
          (recur (rest children)
                 (concat leaf-nodes (if subtree
                                      (leaf-states subtree)
                                      [child])))
          leaf-nodes)))))

(defn active-leaf-states
  []
  (filter active? (leaf-states (:tree @app-db))))




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
  (warn "super-dispatch: event-v: " event-v)
  (let [event-id (first-in-vector event-v)
        trigger (second event-id)
        fsm-name (namespace trigger)
        super-fsm-name (super (keyword fsm-name))]
    (warn "super-fsm: " super-fsm-name)
    (when super-fsm-name
      (let [new-state (active-state super-fsm-name)
            new-trigger (transform-kw trigger fsm-name (name super-fsm-name))
            new-event-v (vec (concat [[new-state new-trigger]] (rest event-v)))]
        (dispatch new-event-v)))))


;; TODO refactor registration to use [event-id state]
(defn dispatch
  "If a handler is registered for the event-id, call re-frame's dispatch;
  otherwise, move up the state hierarchy and try again"
  [event-v]
  (warn "dispatch: event-v: " event-v)
  (if (nil? event-v)
    (re-frame.core/dispatch event-v) ;; let it fail as it should
    (let [event-id (first-in-vector event-v)
          handler-fn (lookup-handler event-id)]
      (if (nil? handler-fn)
        (super-dispatch event-v)
        (re-frame.core/dispatch event-v)))))


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
    (dispatch [[:alert/off :alert/on] {:title "State error"
                                       :body (str "Transition " trigger
                                                  " could not be performed from state "
                                                  current-state)}])))
