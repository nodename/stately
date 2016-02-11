(ns quantumcalc.ui.react-widgets
  (:require [quantumcalc.ui.colors :as colors]
            [quantumcalc.ui.styles :refer [styles]]
            [reagent.core :as reagent]))

(def view (reagent/adapt-react-class js/React.View))
(def scroll-view (reagent/adapt-react-class js/React.ScrollView))
(def text (reagent/adapt-react-class js/React.Text))
(def button (reagent/adapt-react-class (js/require "apsl-react-native-button/Button.js")))
(def text-input (reagent/adapt-react-class js/React.TextInput))
(def touchable-opacity (reagent/adapt-react-class js/React.TouchableOpacity))
(def image (reagent/adapt-react-class js/React.Image))
(def navigator (reagent/adapt-react-class js/React.Navigator))
(def list-view (reagent/adapt-react-class js/React.ListView))

(def DataSource js/React.ListView.DataSource)


(def Dimensions js/React.Dimensions)
(defn window-dimensions []
  (js->clj (.get Dimensions "window") :keywordize-keys true))

(defn window-width []
  (:width (window-dimensions)))

(defn window-height []
  (:height (window-dimensions)))


(def LayoutAnimation js/React.LayoutAnimation)

(defn spacer [dims]
  [view {:style dims}])

(defn hspacer [width]
  [spacer {:width width}])

(defn vspacer [height]
  [spacer {:height height}])

(defn large-button [props text]
  [button (merge {:style [(.-btnRounded styles)
                          {:marginLeft 10
                           :marginRight 10
                           :height 42
                           :backgroundColor colors/blue}]
                  :textStyle [(or (:txt-style props) (.-txtMedium styles)) {:color "white"}]
                  :onPress (:on-press props)
                  :isDisabled (:disabled? props)})
   text])

(defn checkbox [{:keys [checked? label on-press] :as props} children]
  [view {:style [(.-horzLayoutBkg styles) {:height 32}]}
   [touchable-opacity {:style [(.-horzLayoutBkg styles) {:flex 1 :height 32}]
                       :onPress #(on-press (not checked?))}
    [image {:style {:width 25
                    :height 25
                    :marginTop 3}
            :source {:isStatic true
                     :uri (if checked?
                            "icon-checkcircle-blue"
                            "icon-circle-white")}}]
    [text {:style [(.-txtMedium styles) {:width 60
                                         :height 32
                                         :borderWidth 0
                                         :marginLeft 6
                                         :marginTop 5
                                         :color "white"}]}
     label]
    children]])

(defn input [{:keys [editable? invalid? sensitive?
                     value placeholder keyboard-type on-change
                     auto-capitalize]
              :or {editable? true invalid? false sensitive? false
                   auto-capitalize "sentences"}}]
  (let [border-color (if invalid?
                       colors/red
                       (if (> (count value) 0)
                         "white"
                         (colors/gray 3)))]
    [text-input {:editable editable?
                 :style [(.-txtMedium styles) (.-txtInputLogin styles) {:borderColor border-color}]
                 :value value
                 :onChangeText on-change
                 :placeholder placeholder
                 :placeholderTextColor (colors/gray 3)
                 :autoCorrect false
                 :autoCapitalize auto-capitalize
                 :secureTextEntry sensitive?
                 :keyboardType keyboard-type}]))
