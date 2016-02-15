(ns quantumcalc.statechart.alert
  (:require [quantumcalc.ui.alert :refer [show-alert clear-alert-message]]))

(defonce alert
         {:actions     {:alert/show-action          show-alert
                        :alert/clear-message-action clear-alert-message}

          :activities  {}

          :transitions {[:alert/off :alert/on]
                                     {:target       :alert/on
                                      :actions      [[:alert/show-action]]}

                        [:alert/on :alert/off]
                                     {:target       :alert/off
                                      :actions      [[:alert/clear-message-action]]}}

          :start-state :alert/off

          :states      {:alert/on  {}
                        :alert/off {}}})