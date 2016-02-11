(ns quantumcalc.util
  (:require [cljs.core.async :as async]
            [clojure.string]
            [goog.string.format]))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (apply goog.string/format fmt args))
