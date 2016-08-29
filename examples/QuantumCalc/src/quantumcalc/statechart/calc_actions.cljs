(ns quantumcalc.statechart.calc-actions
  (:require [nodename.stately.comms :refer [dispatch log warn]]
            [nodename.stately.core :refer [dispatch-transition]]))

(defn parse-button-press
  [db [key]]
  (dispatch-transition [(keyword (condp = key
                                  '= "equals-entered"
                                  '+ "operator-entered"
                                  '- "operator-entered"
                                  'x "operator-entered"
                                  '/ "operator-entered"
                                  'C "cancel-entered"
                                  '. "dot-entered"
                                  0  "zero-entered"
                                  "digit-entered")) key])
  db)


(defn append-value
  [db [field value]]
  (let [val (str (get db field) value)]
    (dispatch [:display/set-value-action val])
    (assoc db field val)))

(defn replace-operator
  [db [value]]
  (let [val (str value)]
    (dispatch [:display/set-value-action val])
    (assoc db :operator val)))

(defn clear-value
  [db [field]]
  (dissoc db field))

(defn read-string
  "Ignore leading zeroes to avoid reading number as octal;
  prepend a zero to strings with leading dot"
  [s]
  (let [s (clojure.string/replace-first s #"0*" "")
        s (clojure.string/replace-first s #"^\." "0.")]
    (cljs.reader/read-string s)))

(defn calculate-result
  [db]
  (let [op1 (read-string (get-in db [:operand1/value]))
        op2 (read-string (get-in db [:operand2/value]))
        operator (get {"+" + "-" - "x" * "/" /} (get-in db [:operator]))
        result (operator op1 op2)]
    (dispatch [:display/set-value-action (str result)])
    (assoc db :result (str result))))

(defn clear-result
  [db]
  (dispatch [:display/set-value-action " "])
  (dissoc db :result))

(defn copy-result-to-operand1
  [db]
  (let [result (get db :result)]
    (dispatch [:display/set-value-action (str result)])
    (assoc db :operand1/value result)))

(defn set-display-value
  [db [value]]
  (assoc-in db [:display :value] value))