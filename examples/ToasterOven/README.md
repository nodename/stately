# ToasterOven

Demonstrates **composite states and event bubbling**.

A toaster oven with a door and two heating modes (Toast, Bake). Opening the door interrupts heating regardless of which mode is active.

## Statechart features

- **Composite states**: the `:heating` state has a `:components` child FSM with `:toasting` and `:baking` substates
- **Event bubbling**: the `:open-door` transition is defined on the parent `:heating` state and is triggered from either substate
- Entry/exit actions on the parent state control the heater element
