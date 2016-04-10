(ns nodename.stately.communications.re-frame-api
  (:require [re-frame.core :as re-frame]
            [re-frame.utils :as utils]
            [re-frame.handlers :as handlers]
            [re-frame.db :as db]))

(def dispatch re-frame/dispatch)
(def run-queue #()) ;; re-frame runs the queue automatically

(def register-handler re-frame/register-handler)
(def lookup-handler handlers/lookup-handler)

(def log utils/log)
(def warn utils/warn)
(def error utils/error)

(def app-db db/app-db)
