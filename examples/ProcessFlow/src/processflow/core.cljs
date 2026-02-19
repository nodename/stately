(ns processflow.core
  (:require ["react-dom/client" :refer [createRoot]]
            [reagent.core :as reagent]
            [nodename.stately.comms :refer [use-re-frame!]]
            [processflow.ui.app :refer [app-screen]]
            [processflow.statechart.main :refer [start-app]]))

(enable-console-print!)

(defonce root (createRoot (.getElementById js/document "app")))

(defn mount-root
  []
  (.render root (reagent/as-element [app-screen])))

(defn on-reload
  []
  (mount-root))

(defn ^:export init
  []
  (use-re-frame! true)
  (mount-root)
  (start-app))
