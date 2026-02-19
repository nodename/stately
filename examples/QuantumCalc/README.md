# QuantumCalc

Demonstrates **multiple cooperating FSMs, cloned FSMs, and guards**.

A calculator with separate state machines for the app, calculation flow, operand entry, keypad, and display.

## Statechart features

- **Multiple FSMs**: six state machines (`app`, `calc`, `operand1`, `operand2`, `keypad`, `display`) registered together and composed via `:components`
- **Cloned FSMs**: `operand1` and `operand2` are produced by `clone-fsm`, reusing the same `operandX` template with different namespaces
- **Guards**: the `:operator-entered` transition in `:calc/op-entered` uses a `:condition` function to allow a leading minus sign only
- **Internal transitions**: digit and zero entry in integer/fraction states use `:target :internal` to append without re-entering
