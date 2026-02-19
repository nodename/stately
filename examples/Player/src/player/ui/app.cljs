(ns player.ui.app
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [reg-sub subscribe]]
            [nodename.stately.comms :refer [app-db]]
            [nodename.stately.core :refer [dispatch-transition]]
            [nodename.stately.tree :refer [tree]]
            [cljs.user :refer [show-active-states]]))

(reg-sub :active-states (fn [db _] (:active-states db)))
(reg-sub :volume        (fn [db _] (:volume db)))

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
                       :background    (if disabled? "#ddd" "#444")
                       :color         (if disabled? "#aaa" "white")}}
   label])

(defn app-screen
  []
  (let [active (subscribe [:active-states])
        volume (subscribe [:volume])]
    (fn
      []
      (let [playing? (contains? @active :track/playing)
            vol      (or @volume 100)
            muted?   (zero? vol)]
        [:div {:style {:font-family "sans-serif"
                       :max-width   "320px"
                       :margin      "60px auto"
                       :text-align  "center"}}
         [:h1 "Player"]

         [:div {:style {:font-size "72px"
                        :margin    "16px 0"
                        :color     (if playing? "#1db954" "#aaa")}}
          (if playing? "▶" "⏸")]

         [:div {:style {:font-size   "20px"
                        :font-weight "bold"
                        :margin      "8px 0 4px"
                        :color       "#333"}}
          (if playing? "Playing" "Paused")]

         [:div {:style {:font-size     "14px"
                        :color         "#666"
                        :margin-bottom "24px"}}
          (if muted? "🔇 Muted" (str "🔊 Volume: " vol "%"))]

         [:div
          (if playing?
            [btn "Stop" :stop]
            [btn "Play" :play])
          [btn (if muted? "🔇 Muted" (str "🔊 " vol "% ▶")) :cycle-volume]]

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
