(ns player.statechart.main
  (:require [nodename.stately.core :as stately]
            [player.statechart.app :refer [player track volume]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:player player :track track :volume volume})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :player))
