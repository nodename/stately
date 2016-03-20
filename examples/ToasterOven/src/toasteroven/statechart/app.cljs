(ns toasteroven.statechart.app
  (:require [re-frame.core :refer [dispatch]]
            [re-frame.utils :refer [log warn]]))

(defonce app
         {:actions     {:heater-on (fn [db] (assoc db :heater :on))
                        :heater-off (fn [db] (assoc db :heater :off))}

          :transitions {[:heating :open-door] {:target :door-open}
                        [:door-open :close-door] {:target :heating}

                        [:heating :toast] {:target :toasting}
                        [:heating :bake] {:target :baking}}

          :start-state ::heating

          :states      {:heating {:entry-actions [[:heater-on]]
                                  :exit-actions [[:heater-off]]
                                  :components [:heating]}
                        :door-open {}}})

(defonce heating
         {:states {:toasting {}
                   :baking {}}

          :start-state :toasting})