# LightingSystem

Demonstrates **composite (hierarchical) states**.

A lighting system with two modes — Manual and Motion Sensing — each containing its own nested states.

## Statechart features

- **Composite states**: `:lighting/manual` and `:lighting/motion-sensing` each have a `:components` child FSM
- **Hierarchical transitions**: switching modes exits the active child state and enters the new component's start state
- **Internal transitions**: changing brightness in manual mode uses `:target :internal` to update data without re-entering the state
- Entry/exit actions on nested states manage the light and motion timer
