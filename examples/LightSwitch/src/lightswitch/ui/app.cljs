(ns lightswitch.ui.app
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [app-db]]
            [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :active-states (fn [db _] (:active-states db)))
(reg-sub :count         (fn [db _] (:count db)))

(def small-button-style
  {:padding      "4px 10px"
   :margin-right "6px"
   :cursor       "pointer"
   :font-size    "12px"})

(defn app-screen
  []
  (let [active (subscribe [:active-states])
        count  (subscribe [:count])]
    (fn
      []
      (let [on? (contains? @active :light/on)]
        [:div {:style {:font-family "monospace"
                       :max-width   "280px"
                       :margin      "60px auto"
                       :text-align  "center"}}
         [:h1 "Light Switch"]

         [:div {:style {:font-size     "80px"
                        :margin        "20px 0"
                        :line-height   "1"
                        :color         (if on? "#f5c542" "#aaa")
                        :text-shadow   (when on? "0 0 20px #f5c542")}}
          "●"]

         [:div {:style {:font-size    "20px"
                        :font-weight  "bold"
                        :margin       "8px 0 20px"
                        :color        (if on? "#333" "#999")}}
          (if on? "ON" "OFF")]

         [:button {:style    {:font-size     "18px"
                              :padding       "10px 28px"
                              :cursor        "pointer"
                              :border-radius "6px"
                              :border        "none"
                              :background    "#444"
                              :color         "white"}
                   :on-click #(dispatch-transition [:flip])}
          "Flip"]

         [:div {:style {:margin-top "24px"
                        :font-size  "14px"
                        :color      "#666"}}
          (str "Times turned on: " (or @count 0))]

         [:div {:style {:margin-top "16px"}}
          [:button {:style small-button-style
                    :on-click #(pprint (tree))}
           "statechart"]
          [:button {:style small-button-style
                    :on-click #(pprint (dissoc @app-db :tree :active-states :parents))}
           "db"]
          [:button {:style small-button-style
                    :on-click show-active-states}
           "active states"]]]))))
