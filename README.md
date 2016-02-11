# StateChart

## Components

A component is an instance of a finite-state machine.
A component may declare actions, transitions, activities, states, and a start-state.

## Actions

Actions are instantaneous events fired by a transition.

The keyword id of an action or a transition represents the event that triggers it.
Actions must be defined as functions that take the app-db and return its new state.
Arguments to the function may be provided by enclosing the function and arguments in a vector.

## Transitions

A transition must specify start-states; it will not fire if the current state
is not one of the start-states. Start-states may be specified as `:any` or `:none` if desired.

The transition must also specify a target state. This may be identical to a start state.
Or it may be specified as `:internal`, indicating no change of state.
(An :internal transition will not invoke exit or entry actions of the state.)
The target may also be a function that will yield the target state when the transition is invoked.
(There are rare transitions whose target state cannot be determined until after the transition,
such as popping the screen stack when a back button is pressed; in this case you must
ensure that `complete-transition` is invoked.)

A transition may also have actions; these are triggered when the transition takes place,
and are invoked in the context of the target state.
(These actions may in turn trigger other transitions.) If omitted, actions
defaults to `[]`.

A transition may have a condition: a function that will prevent the transition
from triggering if it returns a falsy value in the handler.
A condition has the same signature as an event handler, but it does not return the new db.
(Condition defaults to `(constantly true)`.)

Here's an example. Suppose we want to accept no passwords except 'boo'.
We give the transition a vector of branches, each having its own condition, target,
and actions.


```
:signin/go-chosen {:start-states [:signin/start]
                   :branches [{:condition (fn [db _]
                                            (= (get-in db [:values :password]) "boo"))
                               :target       :signin/in-progress
                               :actions      [[:signin/start-action]]}

                              {:target       :signin/forbidden}]}
```

The first branch whose condition evaluates to `true` will be executed.

Any field of a transition that appears outside of the `:branches` is regarded as
common to all the branches.

## States

A state may specify entry-actions and exit-actions.
Entry actions are invoked when the state is entered. This is equivalent to declaring
the actions in a transition, except that entry-actions
will be invoked regardless of which transition led to that state.
And similarly for exit-actions.


A state may specify activities that take place while the state is active,
such as playing a sound loop.
Each activity must specify a start action and a stop action to control it.
Multiple activities may not share a keyword identifier.
Each activity's start action is invoked on entering the state
and its stop action when leaving the state.

A state may specify a vector of components. These indicate the concurrent sub-states that will
be entered when this state is entered. A state machine is also a state!
These components may of course have
start-states that will then be entered recursively. 

## Start-state

If a component specifies a start-state, when the component is entered,
so will the start-state be entered.


All keyword identifiers for actions, transitions, and states must be namespaced.
We use the namespaces for the conceptual decomposition of our statechart
into the various components. We also rely upon namespaces to implement event bubbling.

Application code should not directly invoke action functions. It should only dispatch events.
Actions are invoked by transitions in the same statechart component.
The idea is that you dispatch event notifications, and the statechart
will handle them by invoking the right actions via transitions.
This principle applies within the statechart itself: a transition should not
invoke actions of a different component, but it can invoke a different component's
transition as though it were an action. (Transitions and actions are registered
in the same way; re-frame does not know the difference.)
