# LightSwitch

Demonstrates **basic states and transitions**.

A light that can be flipped on and off, tracking how many times it has been turned on.

## Statechart features

- Two states (`:light/off`, `:light/on`) with a single `:flip` transition between them
- **Entry actions**: the `:light/on` state increments a counter each time it is entered
