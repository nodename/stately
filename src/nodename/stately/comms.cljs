(ns nodename.stately.comms
  (:require [nodename.stately.communications.standalone-api :as st]
            [nodename.stately.communications.re-frame-api :as rf]
            [clojure.set :refer [difference]]))


(def re-frame-comms
  {:dispatch rf/dispatch
   :run-queue #()
   :register-handler rf/register-handler
   :lookup-handler rf/lookup-handler
   :log rf/log
   :warn rf/warn
   :error rf/error
   :app-db rf/app-db})

(def standalone-comms
  {:dispatch st/dispatch
   :run-queue st/run-queue
   :register-handler st/register-handler
   :lookup-handler st/lookup-handler
   :log st/log
   :warn st/warn
   :error st/error
   :app-db st/app-db})

(def comms (atom standalone-comms))
(def app-db (:app-db @comms))

(defn set-comms!
  "Change the set (subset?) of comms functions used by stately.
  'new-comms' should be a map which looks like default-comms"
  [new-comms]
  (assert (empty? (difference (set (keys new-comms)) (set (keys standalone-comms)))) "Unknown keys in new-comms")
  (swap! comms merge new-comms)
  (def app-db (:app-db @comms)))

(defn set-re-frame-comms!
  []
  (set-comms! re-frame-comms))

(defn set-standalone-comms!
  []
  (set-comms! standalone-comms))

(defn use-re-frame!
  [yesno]
  (if yesno
    (set-re-frame-comms!)
    (set-standalone-comms!)))


(defn dispatch [event-v] ((:dispatch @comms) event-v))
(defn run-queue [] ((:run-queue @comms)))
(defn register-handler
  ([id handler]
   ((:register-handler @comms) id handler))
  ([id middleware handler]
   ((:register-handler @comms) id middleware handler)))
(defn lookup-handler [event-id] ((:lookup-handler @comms) event-id))
(defn log [& args] ((:log @comms) [args]))
(defn warn [& args] ((:warn @comms) [args]))
(defn error [& args] ((:error @comms) [args]))
