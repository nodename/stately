(ns nodename.stately.communications.impl.router
  (:require [cljs.core.async :refer [put! >! <! chan]]
            [nodename.stately.communications.impl.logging :refer [warn error]]
            [nodename.stately.communications.impl.handlers :refer [handle]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))


(def event-queue (chan))

(defn requestAnimationFrame
  "Cross-browser wrapper for requestAnimationFrame"
  [callback]
  (cond
    (.-requestAnimationFrame js/window) (.requestAnimationFrame js/window callback)
    (.-webkitRequestAnimationFrame js/window) (.webkitRequestAnimiationFrame js/window callback)
    (.-mozRequestAnimationFrame js/window) (.mozRequestAnimationFrame js/window callback)
    (.-msRequestAnimationFrame js/window) (.msRequestAnimationFrame js/window callback)))

(defn run-queue
  []
  (let [tick (fn tick []
               (go
                 (let [event-v (<! event-queue)]
                   (handle event-v)
                   (requestAnimationFrame tick))))]
    (tick)))

(defn dispatch
  [event-v]
  (if (nil? event-v)
    (error "\"dispatch\" is ignoring a nil event.")
    (put! event-queue event-v))
  nil)

