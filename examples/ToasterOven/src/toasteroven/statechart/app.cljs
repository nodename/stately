(ns toasteroven.statechart.app)

(defonce app
  {:actions     {:heater-on  (fn [db] (assoc db :heater :on))
                 :heater-off (fn [db] (assoc db :heater :off))}

   :transitions {[:app/heating      :open-door]  {:target :app/door-open}
                 [:app/door-open    :close-door] {:target :app/heating}
                 [:heating/toasting :bake]       {:target :heating/baking}
                 [:heating/baking   :toast]      {:target :heating/toasting}}

   :start-state :app/heating

   :states      {:app/heating  {:entry-actions [[:heater-on]]
                                :exit-actions  [[:heater-off]]
                                :components    [:heating]}
                 :app/door-open {}}})

(defonce heating
  {:states      {:heating/toasting {}
                 :heating/baking   {}}
   :start-state :heating/toasting})
