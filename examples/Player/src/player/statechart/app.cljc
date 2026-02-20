(ns player.statechart.app)

(defonce player
  {:start-state :player/active
   :states      {:player/active {:components [:track :volume]}}})

(defonce track
  {:start-state :track/paused
   :transitions {[:track/paused  :play] {:target :track/playing}
                 [:track/playing :stop] {:target :track/paused}}
   :states      {:track/paused  {}
                 :track/playing {}}})

(def volume-levels [0 10 20 30 40 50 60 70 80 90 100])

(defonce volume
  {:actions     {:set-initial-volume (fn
                                       [db]
                                       (assoc db :volume 100))
                 :cycle-volume       (fn
                                       [db]
                                       (let [current (or (:volume db) 100)
                                             next    (->> (cycle volume-levels)
                                                          (drop-while #(not= % current))
                                                          second)]
                                         (assoc db :volume (or next 0))))}
   :start-state :volume/active
   :transitions {[:volume/active :cycle-volume] {:target  :internal
                                                 :actions [[:cycle-volume]]}}
   :states      {:volume/active {:entry-actions [[:set-initial-volume]]}}})
