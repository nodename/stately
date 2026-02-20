(ns processflow.statechart.app
  (:require [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.util :refer [after]]))

(defonce process
  {:actions     {:start-timer (fn
                                [db]
                                (after 2000 #(dispatch-transition [:processing-done]))
                                db)
                 :emit-done   (fn
                                [db]
                                (assoc db :last-signal "processingDone"))}
   :transitions {[:process/idle :start-processing]      {:target :process/processing}
                 [:process/processing :processing-done] {:target  :process/idle
                                                         :actions [[:emit-done]]}}
   :start-state :process/idle
   :states      {:process/idle       {}
                 :process/processing {:entry-actions [[:start-timer]]}}})
