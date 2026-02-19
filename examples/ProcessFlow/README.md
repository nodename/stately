# ProcessFlow

Demonstrates **timed transitions** using entry and exit actions.

A process that moves from Idle to Processing, then automatically returns to Idle after a 2-second timer.

## Statechart features

- **Entry actions**: start a `setTimeout` when entering `:process/processing`
- **Exit actions**: cancel the timer when leaving `:process/processing`
- Timer fires `dispatch-transition` to drive the state machine from outside
