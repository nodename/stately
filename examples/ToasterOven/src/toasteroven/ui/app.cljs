(ns toasteroven.ui.app
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [app-db]]
            [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :active-states (fn [db _] (:active-states db)))
(reg-sub :heater        (fn [db _] (:heater db)))

(def brown  "#8B5E3C")
(def orange "#E8781A")
(def grey   "#888")

(def small-button-style
  {:padding      "4px 10px"
   :margin-right "6px"
   :cursor       "pointer"
   :font-size    "12px"})

(defn btn
  [label event & [{:keys [disabled?]}]]
  [:button {:on-click #(dispatch-transition [event])
            :disabled disabled?
            :style {:padding      "8px 16px"
                    :margin       "4px"
                    :font-size    "15px"
                    :cursor       (if disabled? "default" "pointer")
                    :border-radius "4px"
                    :border       "none"
                    :background   (if disabled? "#ccc" orange)
                    :color        (if disabled? grey "white")}}
   label])

(defn oven-display
  [active heater]
  (let [door-open?  (contains? active :app/door-open)
        toasting?   (contains? active :heating/toasting)
        baking?     (contains? active :heating/baking)
        heating?    (= :on heater)]
    [:div {:style {:border        (str "6px solid " brown)
                   :border-radius "12px"
                   :width         "260px"
                   :height        "200px"
                   :margin        "20px auto"
                   :position      "relative"
                   :background    (if heating? "#ff9" "#ddd")
                   :display       "flex"
                   :align-items   "center"
                   :justify-content "center"
                   :font-size     "14px"
                   :transition    "background 0.4s"}}
     [:div {:style {:text-align "center" :color "#333"}}
      [:div {:style {:font-size "28px" :margin-bottom "8px"}}
       (cond door-open? "🚪" toasting? "🍞" baking? "🥧" :else "⬜")]
      [:div (cond door-open?  "Door open"
                  toasting?   "Toasting"
                  baking?     "Baking"
                  :else       "Idle")]
      [:div {:style {:font-size "11px" :color grey :margin-top "4px"}}
       (str "Heater: " (if heating? "ON" "OFF"))]]
     (when door-open?
       [:div {:style {:position   "absolute"
                      :bottom     "0"
                      :left       "0"
                      :right      "0"
                      :height     "60px"
                      :background brown
                      :border-radius "0 0 6px 6px"
                      :opacity    "0.7"}}])]))

(defn app-screen
  []
  (let [active (subscribe [:active-states])
        heater (subscribe [:heater])]
    (fn []
      (let [door-open? (contains? @active :app/door-open)
            toasting?  (contains? @active :heating/toasting)
            baking?    (contains? @active :heating/baking)]
        [:div {:style {:font-family "sans-serif"
                       :max-width   "360px"
                       :margin      "40px auto"
                       :text-align  "center"}}
         [:h1 {:style {:color brown}} "ToasterOven"]

         [oven-display @active @heater]

         [:div {:style {:margin-top "16px"}}
          [btn "Open Door"  :open-door  {:disabled? door-open?}]
          [btn "Close Door" :close-door {:disabled? (not door-open?)}]]

         [:div
          [btn "Toast" :toast {:disabled? (or door-open? toasting?)}]
          [btn "Bake"  :bake  {:disabled? (or door-open? baking?)}]]

         [:div {:style {:margin-top "20px"}}
          [:button {:style small-button-style
                    :on-click #(pprint (tree))}
           "statechart"]
          [:button {:style small-button-style
                    :on-click #(pprint (dissoc @app-db :tree :active-states :parents))}
           "db"]
          [:button {:style small-button-style
                    :on-click #(active)}
           "active states"]]]))))
