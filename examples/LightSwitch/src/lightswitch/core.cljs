(ns lightswitch.core
  (:require ["react-dom/client" :refer [createRoot]]
            [reagent.core :as reagent]
            [nodename.stately.comms :refer [use-re-frame!]]
            [lightswitch.ui.app :refer [app-screen]]
            [lightswitch.statechart.main :refer [start-app]]))

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
