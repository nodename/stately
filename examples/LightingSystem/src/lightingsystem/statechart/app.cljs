(ns lightingsystem.statechart.app
  (:require [nodename.stately.core :refer [dispatch-transition]]))

(defonce lighting
         {:actions     {:light-on         (fn [db] (assoc db :light :on :brightness 100))
                        :light-off        (fn [db] (assoc db :light :off :brightness 0))
                        :cycle-brightness (fn
                                            [db]
                                            (let [levels [25 50 75 100]
                                                  current (:brightness db)
                                                  next (->> (cycle levels)
                                                            (drop-while #(not= % current))
                                                            second)]
                                              (assoc db :brightness (or next 25))))}
          :transitions {[:lighting/manual :switch-to-motion]         {:target :lighting/motion-sensing}
                        [:lighting/motion-sensing :switch-to-manual] {:target :lighting/manual}}
          :start-state :lighting/manual
          :states      {:lighting/manual         {:components [:manual]}
                        :lighting/motion-sensing {:components [:motion]}}})

(defonce manual
         {:transitions {[:manual/off :toggle]           {:target :manual/on}
                        [:manual/on :toggle]            {:target :manual/off}
                        [:manual/on :change-brightness] {:target  :internal
                                                         :actions [[:cycle-brightness]]}}
          :start-state :manual/off
          :states      {:manual/off {:entry-actions [[:light-off]]}
                        :manual/on  {:entry-actions [[:light-on]]}}})

(defonce motion
         {:actions     {:motion-light-on     (fn
                                               [db]
                                               (assoc db :light :on :brightness 80))
                        :start-motion-timer  (fn
                                               [db]
                                               (let [id (js/setTimeout
                                                          #(dispatch-transition [:timer-expired])
                                                          5000)]
                                                 (assoc db :motion-timer-id id)))
                        :cancel-motion-timer (fn
                                               [db]
                                               (js/clearTimeout (:motion-timer-id db))
                                               (dissoc db :motion-timer-id))}
          :transitions {[:motion/idle :motion-detected] {:target :motion/active}
                        [:motion/active :timer-expired] {:target :motion/idle}}
          :start-state :motion/idle
          :states      {:motion/idle   {:entry-actions [[:light-off]]}
                        :motion/active {:entry-actions [[:motion-light-on]
                                                        [:start-motion-timer]]
                                        :exit-actions  [[:cancel-motion-timer]]}}})
