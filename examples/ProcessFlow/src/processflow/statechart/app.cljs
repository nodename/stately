(ns processflow.statechart.app
  (:require [nodename.stately.core :refer [dispatch-transition]]))

(defonce process
  {:actions     {:start-timer  (fn
                                  [db]
                                  (let [id (js/setTimeout
                                             #(dispatch-transition [:processing-done])
                                             2000)]
                                    (assoc db :timer-id id)))
                 :cancel-timer (fn
                                  [db]
                                  (js/clearTimeout (:timer-id db))
                                  (dissoc db :timer-id))
                 :emit-done    (fn
                                  [db]
                                  (assoc db :last-signal "processingDone"))}
   :transitions {[:process/idle       :start-processing] {:target :process/processing}
                 [:process/processing :processing-done]  {:target  :process/idle
                                                          :actions [[:emit-done]]}}
   :start-state :process/idle
   :states      {:process/idle       {}
                 :process/processing {:entry-actions [[:start-timer]]
                                      :exit-actions  [[:cancel-timer]]}}})
