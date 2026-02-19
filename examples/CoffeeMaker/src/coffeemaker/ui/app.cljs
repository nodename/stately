(ns coffeemaker.ui.app
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [app-db]]
            [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :active-states (fn [db _] (:active-states db)))

(def small-button-style
  {:padding      "4px 10px"
   :margin-right "6px"
   :cursor       "pointer"
   :font-size    "12px"})

(defn btn
  [label event & [{:keys [disabled?]}]]
  [:button {:on-click #(dispatch-transition [event])
            :disabled disabled?
            :style    {:padding       "8px 20px"
                       :margin        "4px"
                       :font-size     "15px"
                       :cursor        (if disabled? "default" "pointer")
                       :border-radius "4px"
                       :border        "none"
                       :background    (if disabled? "#ddd" "#6B3A2A")
                       :color         (if disabled? "#aaa" "white")}}
   label])

(defn status-row
  [label done?]
  [:div {:style {:display       "flex"
                 :align-items   "center"
                 :margin        "8px 0"
                 :font-size     "16px"}}
   [:span {:style {:margin-right "10px"
                   :font-size    "20px"}}
    (if done? "✅" "⏳")]
   [:span {:style {:color (if done? "#333" "#999")}}
    label]])

(defn app-screen
  []
  (let [active (subscribe [:active-states])]
    (fn
      []
      (let [grinding?    (contains? @active :grind-beans/grinding-beans)
            beans-done?  (contains? @active :grind-beans/beans-ground)
            boiling?     (contains? @active :boil-water/boiling-water)
            water-done?  (contains? @active :boil-water/water-boiled)
            making?      (contains? @active :coffee/making-coffee)]
        [:div {:style {:font-family "sans-serif"
                       :max-width   "340px"
                       :margin      "60px auto"
                       :text-align  "center"}}
         [:h1 {:style {:color "#6B3A2A"}} "☕ CoffeeMaker"]

         [:div {:style {:background    "#f9f3ef"
                        :border-radius "10px"
                        :padding       "20px"
                        :margin        "20px 0"
                        :text-align    "left"}}
          (cond
            making?
            [:div {:style {:text-align "center" :font-size "18px" :color "#6B3A2A" :font-weight "bold"}}
             "☕ Making coffee..."]

            (or grinding? boiling? beans-done? water-done?)
            [:div
             [:div {:style {:font-size "13px" :color "#888" :margin-bottom "12px"}} "Preparing (parallel):"]
             [status-row "Grind beans" beans-done?]
             [status-row "Boil water"  water-done?]]

            :else
            [:div {:style {:text-align "center" :color "#aaa"}} "Idle"])]

         [:div
          (when grinding?
            [btn "Beans Ground" :beans-ground])
          (when boiling?
            [btn "Water Boiled" :water-boiled])]
         (when (or grinding? boiling? beans-done? water-done? making?)
           [:div [btn "Reset" :reset]])

         [:div {:style {:margin-top "24px"}}
          [:button {:style    small-button-style
                    :on-click #(pprint (tree))}
           "statechart"]
          [:button {:style    small-button-style
                    :on-click #(pprint (dissoc @app-db :tree :active-states :parents))}
           "db"]
          [:button {:style    small-button-style
                    :on-click show-active-states}
           "active states"]]]))))
