(ns toasteroven.statechart.app)

(defonce app
  {:actions     {:heater-on  (fn [db] (assoc db :heater :on))
                 :heater-off (fn [db] (assoc db :heater :off))}

   :transitions {[:heating/off       :toast]      {:target :heating/toasting}
                 [:heating/off       :bake]       {:target :heating/baking}
                 [:heating/off       :open-door]  {:target :app/door-open}
                 [:heating/toasting  :open-door]  {:target :app/door-open}
                 [:heating/toasting  :bake]       {:target :heating/baking}
                 [:heating/toasting  :stop]       {:target :heating/off}
                 [:heating/baking    :open-door]  {:target :app/door-open}
                 [:heating/baking    :toast]      {:target :heating/toasting}
                 [:heating/baking    :stop]       {:target :heating/off}
                 [:app/door-open     :close-door] {:target :app/heating}}

   :start-state :app/heating

   :states      {:app/heating  {:components [:heating]}
                 :app/door-open {}}})

(defonce heating
  {:states      {:heating/off      {}
                 :heating/toasting {:entry-actions [[:heater-on]]
                                    :exit-actions  [[:heater-off]]}
                 :heating/baking   {:entry-actions [[:heater-on]]
                                    :exit-actions  [[:heater-off]]}}
   :start-state :heating/off})
