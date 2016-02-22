(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(ns quantumcalc.core
  (:require [reagent.core :as reagent]
            [re-frame.utils :refer [log warn]]
            [nodename.stately.statechart :refer [start-app]]
            [quantumcalc.ui.calc :refer [calc-screen]]
            [quantumcalc.statechart.main :refer [register-handlers]]))


(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(enable-console-print!)


;; Handlers

(register-handlers)


;; Rendering


(defn root []
  calc-screen)

(defn render-root! []
  (println "render-root!")
  (reagent/render [root] 1))


;; Main

(defn app-entered-foreground []
  )

(defn app-entered-background []
  )

(defn on-reload []
  #_(render-root!))

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
