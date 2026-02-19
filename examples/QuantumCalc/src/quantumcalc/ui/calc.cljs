(ns quantumcalc.ui.calc
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [dispatch app-db]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :display      (fn [db _] (:display db)))
(reg-sub :active-states (fn [db _] (:active-states db)))

(def blue "#66aef2")

(def button-style
  {:margin "4px"
   :padding "8px 0"
   :font-size "20px"
   :flex 1
   :cursor "pointer"
   :border "none"
   :border-radius "6px"
   :background "white"
   :color blue})

(def small-button-style
  {:padding "4px 10px"
   :margin-right "6px"
   :cursor "pointer"
   :font-size "12px"})

(defn calc-button
  [char]
  [:button {:style button-style
            :on-click #(dispatch [:keypad/button-pressed char])}
   (str char)])

(defn button-row
  [& chars]
  [:div {:style {:display "flex" :margin-bottom "6px"}}
   (for [c chars]
     ^{:key (str c)} [calc-button c])])

(defn active-states-labels
  []
  (let [active (subscribe [:active-states])]
    (fn []
      (let [active-states (remove #(= (name %) "none") @active)
            show-state    (fn [fsm]
                            [:div {:key fsm :style {:font-size "12px"}}
                             (str (or (first (filter #(= (namespace %) fsm)
                                                     active-states))
                                      ""))])]
        [:div
         (show-state "app")
         (show-state "calc")
         (show-state "operand1")
         (show-state "operand2")]))))

(defn calc-screen
  []
  (let [display (subscribe [:display])]
    (fn []
      [:div {:style {:font-family "monospace"
                     :max-width "320px"
                     :margin "40px auto"
                     :background blue
                     :padding "24px"
                     :border-radius "10px"}}

       [:h1 {:style {:color "white"
                     :text-align "center"
                     :font-size "28px"
                     :margin "0 0 16px"}}
        "QuantumCalc"]

       [:div {:style {:font-size "24px"
                      :min-height "40px"
                      :background "white"
                      :padding "8px 12px"
                      :border-radius "6px"
                      :text-align "right"
                      :margin-bottom "12px"}}
        (or (get-in @display [:value]) "\u00a0")]

       [:div {:style {:margin-bottom "12px"}}
        [button-row 'C]
        [button-row 7 8 9 '+]
        [button-row 4 5 6 '-]
        [button-row 1 2 3 'x]
        [button-row 0 '. '= '/]]

       [:div {:style {:color "white"}}
        [active-states-labels]
        [:div {:style {:margin-top "8px"}}
         [:button {:style small-button-style
                   :on-click #(pprint (tree))}
          "statechart"]
         [:button {:style small-button-style
                   :on-click #(pprint (dissoc @app-db :tree :active-states :parents))}
          "db"]
         [:button {:style small-button-style
                   :on-click show-active-states}
          "active states"]]]])))
