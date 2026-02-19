# CoffeeMaker

Demonstrates **parallel states with a join transition** (analogous to XState's `onDone`).

Grinding beans and boiling water happen simultaneously. Only when both are complete does the machine advance to making coffee.

## Statechart features

- **Parallel states**: `:coffee/preparing` has two `:components` (`:grind-beans` and `:boil-water`), both active at the same time
- **Join transition**: stately has no native `onDone`, so it is simulated — each "final" substate (`:beans-ground`, `:water-boiled`) has an entry action that checks whether the other region has also completed, and fires `:preparing-done` if so
- The check works correctly because entry actions are dispatched through the re-frame queue: by the time the handler runs, `:active-states` in the db reflects the completed transition
