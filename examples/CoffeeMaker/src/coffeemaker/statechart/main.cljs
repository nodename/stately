(ns coffeemaker.statechart.main
  (:require [nodename.stately.core :as stately]
            [coffeemaker.statechart.app :refer [coffee grind-beans boil-water]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:coffee      coffee
                         :grind-beans grind-beans
                         :boil-water  boil-water})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :coffee))
