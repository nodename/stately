(ns quantumcalc.ui.colors
  (:require [clojure.string]
            [quantumcalc.util :as util]))

(def blue "rgb(102,174,242)")

(def red "rgb(255,109,101)")

(def green "rgb(60,201,185)")

(def white "rgb(255,255,255)")

(def lightgreen "rgb(176,233,226)")

(def yellow "rgb(255,199,78)")

(def gray (let [comps [[218 219 220]
                        [200 201 203]
                        [151 153 156]
                        [121 122 125]
                        [80 83 90]
                        [73 76 83]
                        [69 69 79]]]
             (mapv #(util/format "rgb(%s)" (clojure.string/join "," %)) comps)))

(def dark-gray (gray (dec (count gray))))
