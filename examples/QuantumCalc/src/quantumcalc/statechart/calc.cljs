(ns quantumcalc.statechart.calc
  (:require [re-frame.utils :refer [log warn]]
            [nodename.stately.core :refer [clone-fsm dispatch]]
            [quantumcalc.statechart.calc-actions :refer [parse-button-press
                                                         append-value clear-value
                                                         replace-operator
                                                         calculate-result clear-result
                                                         copy-result-to-operand1
                                                         set-display-value]]))


(defonce app
         {:actions     {:app/clear-inputs-action (fn [db]
                                                   (dispatch [:operand1/clear-value-action])
                                                   (dispatch [:operand2/clear-value-action])
                                                   (dispatch [:calc/clear-value-action])
                                                   db)}

          :transitions {[:app/on :cancel-entered] {:target :app/on
                                                   :actions [[:app/clear-inputs-action]
                                                             [:calc/clear-result-action]]}}

          :start-state :app/on

          :states      {:app/on {:components [:calc :alert]}}})


(defonce calc
         {:actions {:calc/replace-operator-action        replace-operator
                    :calc/clear-value-action             [clear-value :calc/value]
                    :calc/calculate-result-action        calculate-result
                    :calc/clear-result-action            clear-result
                    :calc/copy-result-to-operand1-action copy-result-to-operand1}

          :transitions {[:calc/start :zero-entered] {:target :operand1/zero}
                        [:calc/start :digit-entered] {:target :operand1/int}
                        [:calc/start :dot-entered] {:target :operand1/frac}


                        [:calc/operand1 :operator-entered] {:target :calc/op-entered
                                                            :actions [[:calc/replace-operator-action]]}


                        [:calc/op-entered :zero-entered] {:target :operand2/zero}
                        [:calc/op-entered :digit-entered] {:target :operand2/int}
                        [:calc/op-entered :dot-entered] {:target :operand2/frac}

                        ;; insert neg2.txt to enable a negative second operand



                        [:calc/operand2 :equals-entered] {:target  :calc/result
                                                          :actions [[:calc/calculate-result-action]
                                                                    [:app/clear-inputs-action]]}

                        ;; insert xx.txt to enable chaining, like operand operator operand operator operand...



                        [:calc/result :zero-entered] {:target :operand1/zero}
                        [:calc/result :digit-entered] {:target :operand1/int}
                        [:calc/result :dot-entered] {:target :operand1/frac}
                        [:calc/result :operator-entered] {:target :calc/op-entered
                                                          :actions   [[:calc/copy-result-to-operand1-action]
                                                                      [:calc/replace-operator-action]]}}

          :start-state :calc/start

          :states {:calc/start      {}
                   :calc/operand1   {:components [:operand1]}
                   :calc/op-entered {}
                   :calc/operand2   {:components [:operand2]}
                   :calc/result     {}}})


(defonce operandX
         {:actions
          {:operandX/update-value-action [append-value :operandX/value]
           :operandX/clear-value-action  [clear-value :operandX/value]}

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

          :states
          {:operandX/zero  {:entry-actions [[:operandX/update-value-action]]}
           :operandX/int   {:entry-actions [[:operandX/update-value-action]]}
           :operandX/frac  {:entry-actions [[:operandX/update-value-action]]}}})


(defonce operand1 (clone-fsm operandX "operand1"))

(defonce operand2 (clone-fsm operandX "operand2"))

(defonce keypad
         {:actions {:keypad/button-pressed parse-button-press}})

(defonce display
         {:actions {:display/set-value set-display-value}})
