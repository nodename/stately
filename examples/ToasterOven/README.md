# ToasterOven

Demonstrates **composite states with an idle substate**.

A toaster oven with a door and two heating modes (Toast, Bake). The oven starts idle with the heater off. Opening the door interrupts any mode; closing it returns to idle.

## Statechart features

- **Composite states**: `:app/heating` has a `:heating` component FSM with three substates: `:heating/off`, `:heating/toasting`, and `:heating/baking`
- **Idle substate**: `:heating/off` is the start state of the component — the heater stays off until Toast or Bake is selected
- Entry/exit actions on `:heating/toasting` and `:heating/baking` control the heater element
