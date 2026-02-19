(ns processflow.statechart.main
  (:require [nodename.stately.core :as stately]
            [processflow.statechart.app :refer [process]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:process process})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :process))
