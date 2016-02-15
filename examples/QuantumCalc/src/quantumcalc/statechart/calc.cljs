(ns quantumcalc.statechart.calc ;; BAK
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

          :transitions {[:app/on :app/cancel-entered] {:target :app/on
                                                       :actions [[:app/clear-inputs-action]
                                                                 [:calc/clear-result-action]]}}

          :start-state :app/on

          :states      {:app/on {:components [:calc :alert]}}})


(defonce calc
         {:actions {:calc/update-value-action            [append-value :calc/value]
                    :calc/replace-operator-action        replace-operator
                    :calc/clear-value-action             [clear-value :calc/value]
                    :calc/calculate-result-action        calculate-result
                    :calc/clear-result-action            clear-result
                    :calc/copy-result-to-operand1-action copy-result-to-operand1}

          :transitions {
                        [:calc/start :calc/zero-entered] {:target :calc/operand1
                                                          :actions [[[:operand1/start :operand1/zero-entered]]]}
                        [:calc/start :calc/digit-entered] {:target :calc/operand1
                                                           :actions [[[:operand1/start :operand1/digit-entered]]]}
                        [:calc/start :calc/dot-entered] {:target :calc/operand1
                                                         :actions [[[:operand1/start :operand1/dot-entered]]]}


                        [:calc/operand1 :calc/operator-entered] {:target :calc/op-entered
                                                                 :actions [[:calc/replace-operator-action]]}


                        [:calc/op-entered :calc/zero-entered] {:target    :calc/operand2
                                                               :actions [[[:operand2/start :operand2/zero-entered]]]}
                        [:calc/op-entered :calc/digit-entered] {:target    :calc/operand2
                                                                :actions [[[:operand2/start :operand2/digit-entered]]]}
                        [:calc/op-entered :calc/dot-entered] {:target    :calc/operand2
                                                              :actions [[[:operand2/start :operand2/dot-entered]]]}


                        [:calc/operand2 :calc/equals-entered] {:target       :calc/result
                                                               :actions      [[:calc/calculate-result-action]
                                                                              [:app/clear-inputs-action]]}


                        [:calc/result :calc/zero-entered] {:target :calc/operand1
                                                          :actions [[[:operand1/start :operand1/zero-entered]]]}
                        [:calc/result :calc/digit-entered] {:target :calc/operand1
                                                            :actions [[[:operand1/start :operand1/digit-entered]]]}
                        [:calc/result :calc/dot-entered] {:target :calc/operand1
                                                          :actions [[[:operand1/start :operand1/dot-entered]]]}
                        [:calc/result :calc/operator-entered] {:target :calc/op-entered
                                                               :actions   [[:calc/copy-result-to-operand1-action]
                                                                           [:calc/replace-operator-action]]}

                        ;; neg2
                        ;; xx




                        }

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
          {[:operandX/start :operandX/zero-entered] {:target       :operandX/zero
                                                     :actions      [[:operandX/update-value-action]]}
           [:operandX/start :operandX/dot-entered] {:target       :operandX/frac
                                                    :actions      [[:operandX/update-value-action]]}
           [:operandX/start :operandX/digit-entered] {:target       :operandX/int
                                                      :actions      [[:operandX/update-value-action]]}

           [:operandX/zero :operandX/zero-entered] {:target       :internal}
           [:operandX/zero :operandX/dot-entered] {:target       :operandX/frac
                                                   :actions      [[:operandX/update-value-action]]}
           [:operandX/zero :operandX/digit-entered] {:target       :operandX/int
                                                     :actions      [[:operandX/update-value-action]]}

           [:operandX/int :operandX/zero-entered] {:target       :internal
                                                   :actions      [[:operandX/digit-entered]]}
           [:operandX/int :operandX/dot-entered] {:target       :operandX/frac
                                                  :actions      [[:operandX/update-value-action]]}
           [:operandX/int :operandX/digit-entered] {:target       :internal
                                                    :actions      [[:operandX/update-value-action]]}

           [:operandX/frac :operandX/zero-entered] {:target       :internal
                                                    :actions      [[:operandX/digit-entered]]}
           [:operandX/frac :operandX/digit-entered] {:target       :internal
                                                     :actions      [[:operandX/update-value-action]]}

           ;; neg2
           }

          :start-state
          :operandX/start

          :states
          {:operandX/start {}
           :operandX/zero  {}
           :operandX/int   {}
           :operandX/frac  {}}})

(defonce operand1 (clone-fsm operandX "operand1"))

(defonce operand2 (clone-fsm operandX "operand2"))

(defonce keypad
         {:actions {:keypad/button-pressed parse-button-press}})

(defonce display
         {:actions {:display/set-value set-display-value}})
