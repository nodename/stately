(ns cljs.user
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.db :refer [app-db]]))


(defn show-db
  []
  (pprint @app-db))


(defn show-state-tree
  []
  (pprint (get @app-db :tree)))

(defn active
  []
  (println (get @app-db :active-states)))
