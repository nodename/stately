# Player

Demonstrates **parallel (orthogonal) states**.

A media player where track playback and volume are controlled independently and simultaneously.

## Statechart features

- **Parallel states**: `:player/active` has two `:components` (`:track` and `:volume`), both active at the same time
- `:play`/`:stop` events are handled exclusively by the `:track` region
- `:cycle-volume` events are handled exclusively by the `:volume` region
- Each region maintains its own state independently; neither affects the other
