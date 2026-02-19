(ns processflow.ui.app
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [app-db]]
            [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :active-states (fn [db _] (:active-states db)))
(reg-sub :last-signal   (fn [db _] (:last-signal db)))

(def small-button-style
  {:padding      "4px 10px"
   :margin-right "6px"
   :cursor       "pointer"
   :font-size    "12px"})

(defn app-screen
  []
  (let [active      (subscribe [:active-states])
        last-signal (subscribe [:last-signal])]
    (fn
      []
      (let [processing? (contains? @active :process/processing)]
        [:div {:style {:font-family "sans-serif"
                       :max-width   "320px"
                       :margin      "60px auto"
                       :text-align  "center"}}
         [:h1 "Process Flow"]

         [:div {:style {:font-size     "18px"
                        :font-weight   "bold"
                        :margin        "20px 0 8px"
                        :color         "#333"}}
          "State:"]

         [:div {:style {:font-size     "28px"
                        :font-weight   "bold"
                        :margin-bottom "28px"
                        :color         (if processing? "#e07b00" "#2a7a2a")}}
          (if processing? "Processing..." "Idle")]

         [:button {:style    {:font-size     "16px"
                              :padding       "10px 24px"
                              :cursor        (if processing? "default" "pointer")
                              :border-radius "6px"
                              :border        "none"
                              :background    (if processing? "#ccc" "#444")
                              :color         "white"}
                   :disabled processing?
                   :on-click #(dispatch-transition [:start-processing])}
          "Start Processing"]

         (when @last-signal
           [:div {:style {:margin-top  "28px"
                          :padding     "10px 16px"
                          :background  "#eaffea"
                          :border      "1px solid #6c6"
                          :border-radius "6px"
                          :font-size   "14px"
                          :color       "#2a7a2a"}}
            (str "Outgoing event: " @last-signal)])

         [:div {:style {:margin-top "20px"}}
          [:button {:style small-button-style
                    :on-click #(pprint (tree))}
           "statechart"]
          [:button {:style small-button-style
                    :on-click #(pprint (dissoc @app-db :tree :active-states :parents))}
           "db"]
          [:button {:style small-button-style
                    :on-click show-active-states}
           "active states"]]]))))
