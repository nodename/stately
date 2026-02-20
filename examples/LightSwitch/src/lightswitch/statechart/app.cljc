(ns lightswitch.statechart.app)

(defonce light
  {:actions     {:increment-count (fn
                                    [db]
                                    (update db :count (fnil inc 0)))}
   :transitions {[:light/off :flip] {:target :light/on}
                 [:light/on  :flip] {:target :light/off}}
   :start-state :light/off
   :states      {:light/off {}
                 :light/on  {:entry-actions [[:increment-count]]}}})
