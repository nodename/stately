(ns toasteroven.statechart.main
  (:require [nodename.stately.core :as stately]
            [toasteroven.statechart.app :refer [app heating]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:app     app
                         :heating heating})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :app))
