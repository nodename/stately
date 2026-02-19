(ns nodename.stately.communications.re-frame-api
  (:require [re-frame.core :as re-frame]
            [re-frame.registrar :as registrar]
            [re-frame.db :as db]))

(def dispatch re-frame/dispatch)
(def run-queue #()) ;; re-frame runs the queue automatically

(def register-handler re-frame/reg-event-db)
(def lookup-handler (partial registrar/get-handler :event))

(def log #(.log js/console %))
(def warn #(.warn js/console %))
(def error #(.error js/console %))

(def app-db db/app-db)
