(ns nodename.stately.communications.impl.middleware
  (:require [nodename.stately.communications.impl.logging :refer [warn error]]))

(defn pure
  "Acts as an adaptor, allowing handlers to be writen as pure functions.
  The re-frame router passes the `app-db` atom as the first parameter to any handler.
  This middleware adapts that atom to be the value within the atom.
  If you strip away the error/efficiency checks, this middleware is doing:
     (reset! app-db (handler @app-db event-vec))
  You don't have to use this middleware directly. It is automatically applied to
  your handler's middleware when you use \"register-handler\".
  In fact, the only way to by-pass automatic use of \"pure\" in your middleware
  is to use the low level registration function \"re-frame.handlers/register-handler-base\""
  [handler]
  (fn pure-handler
    [app-db event-vec]
    (let [db      @app-db
          new-db  (handler db event-vec)]
      (if (nil? new-db)
        (error "your pure handler returned nil. It should return the new db state.")
        (if-not (identical? db new-db)
          (reset! app-db new-db))))))