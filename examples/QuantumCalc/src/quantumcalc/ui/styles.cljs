(ns quantumcalc.ui.styles)

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))


(def styles
  (.create js/React.StyleSheet
           (clj->js {:btnRounded {:borderWidth 0
                                  :borderRadius 20}
                     :vertLayoutBkg {:flexDirection "column"
                                     :alignItems "center"}
                     :horzLayoutBkg {:flexDirection "row"}
                     :titleH2 {:fontSize 36
                               :color "white"
                               #_:fontFamily #_(:light font-names)}
                     :welcomeFooter {:marginHorizontal 37
                                     :fontSize 10
                                     :color "white"
                                     #_:fontFamily #_(:light font-names)
                                     :textAlign "center"}
                     :btnCenter {:alignSelf "center"
                                 :borderWidth 0}
                     :txtPageHeader {:textAlign "center"
                                     :fontSize 20
                                     #_:fontFamily #_(:medium font-names)}
                     :txtSectionTitle {:fontSize 19
                                       ;;:fontFamily (:normal font-names)
                                       :marginLeft 18
                                       :marginTop 20}
                     :txtSectionContent {:fontSize 18
                                         ;;:fontFamily (:light font-names)
                                         :marginLeft 15
                                         :marginRight 15
                                         :marginTop 10}
                     :txtInputLogin {:height 40
                                     :color "white"
                                     :marginLeft 10
                                     :marginRight 10
                                     :borderRadius 20
                                     :borderWidth 1
                                     :textAlign "center"}
                     :txtSmall {:fontSize 13
                                #_:fontFamily #_(:light font-names)}
                     :txtSmallStrong {:fontSize 13.5
                                      #_:fontFamily #_(:medium font-names)}
                     :txtMedium {:fontSize 20
                                 #_:fontFamily #_(:light font-names)}
                     :txtMediumStrong {:fontSize 20
                                       #_:fontFamily #_(:medium font-names)}})))