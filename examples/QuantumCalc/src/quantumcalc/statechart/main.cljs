(ns quantumcalc.statechart.main
  (:require [nodename.stately.core :as stately]
            [quantumcalc.statechart.app :refer [app calc operand1 operand2 keypad display]]
            [re-frame.core :as re-frame]))

(defonce state-machines {:app      app
                         :calc     calc
                         :operand1 operand1
                         :operand2 operand2
                         :keypad   keypad
                         :display  display})

(defonce middleware [re-frame/trim-v])

(defn start-app
  []
  (stately/start-app middleware state-machines :app))
