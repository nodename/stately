(ns lightingsystem.statechart.main
  (:require [nodename.stately.core :as stately]
            [lightingsystem.statechart.app :refer [lighting manual motion]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:lighting lighting
                         :manual   manual
                         :motion   motion})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :lighting))
