(defproject stately "0.1.0"
  :dependencies [[org.clojure/clojure "1.12.4"]
                 [org.clojure/clojurescript "1.12.134"]
                 [reagent "2.0.1" :exclusions [cljsjs/react]]
                 [re-frame "1.4.4" :exclusions [reagent]]
                 [com.rpl/specter "1.1.6"]]

  :test-paths ["examples"]

  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-doo "0.1.10"]
            [lein-figwheel "0.5.20"]]

  :profiles {:dev
             {:dependencies [[cider/piggieback "0.6.1"]
                             [lein-figwheel "0.5.20"]
                             [figwheel-sidecar "0.5.20"]]}}

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :cljsbuild {:builds [{:id "toasteroven"
                        :source-paths ["src" "dev" "examples/ToasterOven/src"]
                        :compiler {:main toasteroven.core
                                   output-to "examples/ToasterOven/target/out/main.js"
                                   :output-dir "examples/ToasterOven/target/out"
                                   :optimizations :none
                                   :source-map true
                                   :source-map-timestamp true}}

                       {:id "quantumcalc" ;; React Native app for iOS
                        :source-paths ["src" "dev'" "examples/QuantumCalc/src"]
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
                        :source-paths ["src" "dev" "examples/Dining/src"]
                        :compiler {:main dining.core
                                   :output-to "examples/Dining/target/out/main.js"
                                   :output-dir "examples/Dining/target/out"
                                   :optimizations :none
                                   :source-map true
                                   :source-map-timestamp true}
                        :figwheel {:on-jsload "dining.core/on-reload"
                                   :heads-up-display false
                                   :debug false}}]})
