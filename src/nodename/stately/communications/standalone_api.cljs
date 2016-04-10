(ns nodename.stately.communications.standalone-api
  (:require [nodename.stately.communications.impl.router :as router]
            [nodename.stately.communications.impl.handlers :as handlers]
            [nodename.stately.communications.impl.logging :as logging]
            [nodename.stately.communications.impl.middleware :refer [pure]]
            [nodename.stately.communications.impl.db :as db]))

(def dispatch router/dispatch)
(def run-queue router/run-queue)

;; --  Convenience API ------- copied from re-frame

;; Almost 100% of handlers will be pure, so make it easy to
;; register with "pure" middleware in the correct (left-hand-side) position.
(defn register-handler
  ([id handler]
   (handlers/register-base id pure handler))
  ([id middleware handler]
   (handlers/register-base id [pure middleware] handler)))

(def lookup-handler handlers/lookup-handler)

(def log logging/log)
(def warn logging/warn)
(def error logging/error)

(def app-db db/app-db)
