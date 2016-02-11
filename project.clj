(defproject stately "0.1.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [re-frame "0.6.0" :exclusions [reagent]]
                 [com.rpl/specter "0.9.1"]]

  :test-paths ["examples"]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-doo "0.1.6"]
            [lein-figwheel "0.5.0-2"]]

  :profiles {:dev
             {:dependencies [[com.cemerick/piggieback "0.2.1"]
                             [lein-figwheel "0.5.0-2"]
                             [figwheel-sidecar "0.5.0-2"]]}}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :cljsbuild {:builds [{:id "quantumcalc"
                        :source-paths ["src" "examples/QuantumCalc/src"]
                        :compiler {:main quantumcalc.core
                                   :output-to "examples/QuantumCalc/target/out/main.js"
                                   :output-dir "examples/QuantumCalc/target/out"
                                   :optimizations :none
                                   :source-map true
                                   :source-map-timestamp true}
                        :figwheel {:on-jsload "quantumcalc.core/on-reload"
                                   :heads-up-display false
                                   :debug false}}

                       {:id "dining"
                        :source-paths ["src" "examples/Dining/src"]
                        :compiler {:main dining.core
                                   :output-to "examples/Dining/target/out/main.js"
                                   :output-dir "examples/Dining/target/out"
                                   :optimizations :none
                                   :source-map true
                                   :source-map-timestamp true}
                        :figwheel {:on-jsload "dining.core/on-reload"
                                   :heads-up-display false
                                   :debug false}}]})
