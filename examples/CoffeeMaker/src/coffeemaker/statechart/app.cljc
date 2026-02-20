(ns coffeemaker.statechart.app
  (:require [nodename.stately.core :refer [dispatch-transition]]))

(defonce coffee
  {:actions     {:check-preparing-done (fn
                                         [db]
                                         (let [active (:active-states db)]
                                           (when (and (contains? active :grind-beans/beans-ground)
                                                      (contains? active :boil-water/water-boiled))
                                             (dispatch-transition [:preparing-done]))
                                           db))}
   :start-state :coffee/preparing
   :transitions {[:coffee/preparing     :preparing-done] {:target :coffee/making-coffee}
                 [:coffee/preparing     :reset]          {:target :coffee/preparing}
                 [:coffee/making-coffee :reset]          {:target :coffee/preparing}}
   :states      {:coffee/preparing     {:components [:grind-beans :boil-water]}
                 :coffee/making-coffee {}}})

(defonce grind-beans
  {:start-state :grind-beans/grinding-beans
   :transitions {[:grind-beans/grinding-beans :beans-ground] {:target :grind-beans/beans-ground}}
   :states      {:grind-beans/grinding-beans {}
                 :grind-beans/beans-ground   {:entry-actions [[:check-preparing-done]]}}})

(defonce boil-water
  {:start-state :boil-water/boiling-water
   :transitions {[:boil-water/boiling-water :water-boiled] {:target :boil-water/water-boiled}}
   :states      {:boil-water/boiling-water {}
                 :boil-water/water-boiled  {:entry-actions [[:check-preparing-done]]}}})
