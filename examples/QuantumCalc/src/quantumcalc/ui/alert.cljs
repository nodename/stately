(ns quantumcalc.ui.alert
  (:require [re-frame.core :refer [dispatch]]))


(defn- alert
  [title msg & args]
  (apply (partial (.-alert js/React.AlertIOS) title msg) args))


(defn- massage
  [message]
  (if (string? message)
    {:body message}
    message))


(defn show-alert
  [db [message]]
  (if message
    (let [message (massage message)
          {:keys [title body]
           :or {title ""}} message
          buttons (clj->js [{:text "OK"
                             :onPress (fn [_]
                                        (dispatch [:alert/off]))}])]
      #_(alert title body buttons)
      (assoc db :message message))
    db))


(defn clear-alert-message
  [db]
  (assoc db :message nil))