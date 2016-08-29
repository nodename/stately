(ns quantumcalc.statechart.calc
  (:require [nodename.stately.comms :refer [dispatch log warn]]
            [nodename.stately.core :refer [clone-fsm]]
            [quantumcalc.statechart.calc-actions :refer [parse-button-press
                                                         append-value clear-value
                                                         replace-operator
                                                         calculate-result clear-result
                                                         copy-result-to-operand1
                                                         set-display-value]]))


(defonce app
         {:states      {:app/on {:components [:calc :alert]}}

          :start-state :app/on

          :transitions {[:app/on :cancel-entered] {:target :app/on
                                                   :actions [[:app/clear-inputs-action]
                                                             [:calc/clear-result-action]]}
                        [:app/on :zero-entered] {:target :operand1/zero}
                        [:app/on :digit-entered] {:target :operand1/int}
                        [:app/on :dot-entered] {:target :operand1/frac}}

          :actions     {:app/clear-inputs-action (fn [db]
                                                   (dispatch [:operand1/clear-value-action])
                                                   (dispatch [:operand2/clear-value-action])
                                                   (dispatch [:calc/clear-value-action])
                                                   db)}})


(defonce calc
         {:states {:calc/operand1   {:components [:operand1]}
                   :calc/op-entered {}
                   :calc/operand2   {:components [:operand2]}
                   :calc/result     {}}

          :transitions {[:calc/operand1 :operator-entered] {:target :calc/op-entered
                                                            :actions [[:calc/replace-operator-action]]}


                        [:calc/op-entered :zero-entered] {:target :operand2/zero}
                        [:calc/op-entered :digit-entered] {:target :operand2/int}
                        [:calc/op-entered :dot-entered] {:target :operand2/frac}

                        ;; uncomment to enable a negative second operand
                        [:calc/op-entered :operator-entered] {:condition (fn [db [value]]
                                                                           (= value '-))
                                                              :target :operand2/int}



                        [:calc/operand2 :equals-entered] {:target  :calc/result
                                                          :actions [[:calc/calculate-result-action]
                                                                    [:app/clear-inputs-action]]}

                        ;; uncomment to enable chaining, like operand operator operand operator operand...
                        [:calc/operand2 :operator-entered] {:target :calc/op-entered
                                                            :actions [[:calc/calculate-result-action]
                                                                      [:calc/copy-result-to-operand1-action]
                                                                      [:calc/replace-operator-action]
                                                                      [:operand2/clear-value-action]]}


                        [:calc/result :zero-entered] {:target :operand1/zero}
                        [:calc/result :digit-entered] {:target :operand1/int}
                        [:calc/result :dot-entered] {:target :operand1/frac}
                        [:calc/result :operator-entered] {:target :calc/op-entered
                                                          :actions   [[:calc/copy-result-to-operand1-action]
                                                                      [:calc/replace-operator-action]]}}


          :actions {:calc/replace-operator-action        replace-operator
                    :calc/clear-value-action             [clear-value :calc/value]
                    :calc/calculate-result-action        calculate-result
                    :calc/clear-result-action            clear-result
                    :calc/copy-result-to-operand1-action copy-result-to-operand1}})


(defonce operandX
         {:states
          {:operandX/zero  {:entry-actions [[:operandX/update-value-action]]}
           :operandX/int   {:entry-actions [[:operandX/update-value-action]]}
           :operandX/frac  {:entry-actions [[:operandX/update-value-action]]}}

          :transitions
          {[:operandX/zero :zero-entered] {:target :internal}
           [:operandX/zero :dot-entered] {:target :operandX/frac}
           [:operandX/zero :digit-entered] {:target :operandX/int}

           [:operandX/int :zero-entered] {:target :internal
                                          :actions [[:operandX/update-value-action]]}
           [:operandX/int :dot-entered] {:target :operandX/frac}
           [:operandX/int :digit-entered] {:target :internal
                                           :actions [[:operandX/update-value-action]]}

           [:operandX/frac :zero-entered] {:target :internal
                                           :actions [[:operandX/update-value-action]]}
           [:operandX/frac :digit-entered] {:target :internal
                                            :actions [[:operandX/update-value-action]]}}

          :actions
          {:operandX/update-value-action [append-value :operandX/value]
           :operandX/clear-value-action  [clear-value :operandX/value]}})


(defonce operand1 (clone-fsm operandX "operand1"))

(defonce operand2 (clone-fsm operandX "operand2"))

(defonce keypad
         {:actions {:keypad/button-pressed parse-button-press}})

(defonce display
         {:actions {:display/set-value-action set-display-value}})
