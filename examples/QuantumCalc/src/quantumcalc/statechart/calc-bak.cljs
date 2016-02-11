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
         {:actions     {:app/clear-inputs-action
                        (fn [db]
                          (dispatch [:operand1/clear-value-action])
                          (dispatch [:operand2/clear-value-action])
                          (dispatch [:calc/clear-value-action])
                          db)}

          :transitions {:app/cancel-entered
                        {:start-states [:app/on]
                         :target       :app/on
                         :actions      [[:app/clear-inputs-action]
                                        [:calc/clear-result-action]]}}

          :start-state :app/on

          :states      {:app/on {:components [:calc :alert]}}})


(defonce calc
         {:actions
          {:calc/update-value-action            [append-value :calc/value]
           :calc/replace-operator-action        replace-operator
           :calc/clear-value-action             [clear-value :calc/value]
           :calc/calculate-result-action        calculate-result
           :calc/clear-result-action            clear-result
           :calc/copy-result-to-operand1-action copy-result-to-operand1}

          :transitions
          {:calc/operator-entered {:branches [{:start-states [:calc/operand1]
                                               :target :calc/op-entered
                                               :actions [[:calc/replace-operator-action]]}

                                              {:start-states [:calc/result]
                                               :target :calc/op-entered
                                               :actions   [[:calc/copy-result-to-operand1-action]
                                                           [:calc/replace-operator-action]]}

                                              ;; neg2
                                              ;; xx
                                              ]}

           :calc/digit-entered {:branches [{:start-states [:calc/op-entered]
                                            :target    :calc/operand2
                                            :actions [[:operand2/digit-entered]]}

                                           {:start-states [:calc/start :calc/result]
                                            :target :calc/operand1
                                            :actions [[:operand1/digit-entered]]}]}

           :calc/zero-entered {:branches [{:start-states [:calc/op-entered]
                                           :target    :calc/operand2
                                           :actions [[:operand2/zero-entered]]}

                                          {:start-states [:calc/start :calc/result]
                                           :target :calc/operand1
                                           :actions [[:operand1/zero-entered]]}]}

           :calc/dot-entered {:branches [{:start-states [:calc/op-entered]
                                          :target    :calc/operand2
                                          :actions [[:operand2/dot-entered]]}

                                         {:start-states [:calc/start :calc/result]
                                          :target :calc/operand1
                                          :actions [[:operand1/dot-entered]]}]}

           :calc/equals-entered {:start-states [:calc/operand2]
                                 :target       :calc/result
                                 :actions      [[:calc/calculate-result-action]
                                                [:app/clear-inputs-action]]}}

          :start-state
          :calc/start

          :states
          {:calc/start      {}
           :calc/operand1   {:components [:operand1]}
           :calc/op-entered {}
           :calc/operand2   {:components [:operand2]}
           :calc/result     {}}})


(defonce operandX
         {:actions
          {:operandX/update-value-action [append-value :operandX/value]
           :operandX/clear-value-action  [clear-value :operandX/value]}

          :transitions
          {:operandX/zero-entered  {:branches [{:start-states [:operandX/zero]
                                                :target       :internal}

                                               {:start-states [:operandX/int
                                                               :operandX/frac]
                                                :target       :internal
                                                :actions      [[:operandX/digit-entered]]}

                                               {:start-states [:operandX/start]
                                                :target       :operandX/zero
                                                :actions      [[:operandX/update-value-action]]}]}

           :operandX/digit-entered {:branches [{:start-states [:operandX/int
                                                               :operandX/frac]
                                                :target       :internal
                                                :actions      [[:operandX/update-value-action]]}

                                               {:start-states [:operandX/start
                                                               :operandX/zero]
                                                :target       :operandX/int
                                                :actions      [[:operandX/update-value-action]]}]}

           :operandX/dot-entered   {:start-states [:operandX/start
                                                   :operandX/zero
                                                   :operandX/int]
                                    :target       :operandX/frac
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
