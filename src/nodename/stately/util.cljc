(ns nodename.stately.util)

(defn parse-number
  [s]
  #?(:cljs (js/parseFloat s)
     :clj  (Double/parseDouble s)))

(defn format-precision
  [n digits]
  #?(:cljs (str (js/parseFloat (.toPrecision n digits)))
     :clj  (str (Double/parseDouble (format (str "%." digits "g") (double n))))))

(defn after
  "Start a timer that calls callback after delay ms.
  Returns a cancel function that cancels the timer if called before it fires."
  [delay callback]
  #?(:cljs (js/setTimeout callback delay)
     :clj  (let [timer (java.util.Timer.)]
             (.schedule timer
                        (proxy [java.util.TimerTask] []
                          (run [] (callback)))
                        (long delay)))))
