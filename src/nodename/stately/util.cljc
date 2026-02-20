(ns nodename.stately.util)

(defn after
  [delay callback]
  #?(:cljs (js/setTimeout callback delay)
     :clj  (let [timer (java.util.Timer.)]
             (.schedule timer
                        (proxy [java.util.TimerTask] []
                          (run [] (callback)))
                        (long delay)))))
