(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(ns quantumcalc.core
  (:require [reagent.core :as reagent]
            [re-frame.utils :refer [log warn]]
            [quantumcalc.ui.calc :refer [calc-screen]]
            [quantumcalc.statechart.main :refer [start-app]]))


(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(enable-console-print!)


(defn root []
  calc-screen)

(defn render-root! []
  (println "render-root!")
  (reagent/render [root] 1))



(defn app-entered-foreground []
  )

(defn app-entered-background []
  )

(defn on-reload []
  (render-root!))

(defn ^:export init []
  (render-root!)
  (start-app)

  (.addEventListener
    js/React.AppStateIOS "change"
    (fn [state]
      (case state
        "active" (app-entered-foreground)
        "background" (app-entered-background)))))

(defonce setup
         (do
           (init)
           true))
