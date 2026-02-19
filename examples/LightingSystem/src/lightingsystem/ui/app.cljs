(ns lightingsystem.ui.app
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [app-db]]
            [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :active-states (fn [db _] (:active-states db)))
(reg-sub :brightness    (fn [db _] (:brightness db)))

(def small-button-style
  {:padding      "4px 10px"
   :margin-right "6px"
   :cursor       "pointer"
   :font-size    "12px"})

(defn bulb
  [brightness]
  [:div {:style {:width           "120px"
                 :height          "120px"
                 :border-radius   "50%"
                 :margin          "24px auto"
                 :background      (str "rgba(255, 220, 80, " (/ brightness 100) ")")
                 :border          "3px solid #ccc"
                 :box-shadow      (when (pos? brightness)
                                    (str "0 0 " (* brightness 0.4) "px "
                                         (* brightness 0.2) "px rgba(255,220,80,0.8)"))
                 :transition      "all 0.4s ease"
                 :display         "flex"
                 :align-items     "center"
                 :justify-content "center"
                 :font-size       "14px"
                 :color           (if (pos? brightness) "#333" "#aaa")}}
   (str brightness "%")])

(defn btn
  [label event & [{:keys [disabled?]}]]
  [:button {:on-click  #(dispatch-transition [event])
            :disabled  disabled?
            :style     {:padding       "8px 16px"
                        :margin        "4px"
                        :font-size     "14px"
                        :cursor        (if disabled? "default" "pointer")
                        :border-radius "4px"
                        :border        "none"
                        :background    (if disabled? "#ddd" "#444")
                        :color         (if disabled? "#aaa" "white")}}
   label])

(defn app-screen
  []
  (let [active     (subscribe [:active-states])
        brightness (subscribe [:brightness])]
    (fn
      []
      (let [manual?         (contains? @active :lighting/manual)
            motion-sensing? (contains? @active :lighting/motion-sensing)
            manual-on?      (contains? @active :manual/on)
            motion-active?  (contains? @active :motion/active)
            br              (or @brightness 0)]
        [:div {:style {:font-family "sans-serif"
                       :max-width   "340px"
                       :margin      "40px auto"
                       :text-align  "center"}}
         [:h1 "Lighting System"]

         [bulb br]

         [:div {:style {:font-size   "18px"
                        :font-weight "bold"
                        :margin      "8px 0 4px"
                        :color       (if (pos? br) "#c8a000" "#999")}}
          (if (pos? br) "ON" "OFF")]

         [:div {:style {:font-size "13px" :color "#666" :margin-bottom "20px"}}
          (str "Brightness: " br "%")]

         [:div {:style {:background    "#f5f5f5"
                        :border-radius "8px"
                        :padding       "16px"
                        :margin-bottom "16px"}}
          [:div {:style {:font-size "13px" :color "#888" :margin-bottom "10px"}}
           "Mode"]
          [:div {:style {:font-size "16px" :font-weight "bold" :margin-bottom "12px"}}
           (cond manual?         "Manual"
                 motion-sensing? "Motion Sensing")]
          (if manual?
            [:div
             [btn "Toggle Light" :toggle]
             [btn "Change Brightness" :change-brightness {:disabled? (not manual-on?)}]
             [btn "Switch to Motion Sensing" :switch-to-motion]]
            [:div
             [btn "Simulate Motion" :motion-detected {:disabled? motion-active?}]
             [:div {:style {:font-size "12px" :color "#888" :margin "6px 0"}}
              (if motion-active?
                "Light will turn off after 5 seconds"
                "Waiting for motion...")]
             [btn "Switch to Manual" :switch-to-manual]])]

         [:div {:style {:margin-top "8px"}}
          [:button {:style small-button-style
                    :on-click #(pprint (tree))}
           "statechart"]
          [:button {:style small-button-style
                    :on-click #(pprint (dissoc @app-db :tree :active-states :parents))}
           "db"]
          [:button {:style small-button-style
                    :on-click show-active-states}
           "active states"]]]))))
