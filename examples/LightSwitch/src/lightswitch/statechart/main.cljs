(ns lightswitch.statechart.main
  (:require [nodename.stately.core :as stately]
            [lightswitch.statechart.app :refer [light]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:light light})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :light))
