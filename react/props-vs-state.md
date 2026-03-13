# Props vs State

## Props
Props are inputs passed from a parent component to a child component.
They are read-only inside the receiving component.

## State
State is data owned and updated by a component.
When state changes, the component re-renders.

## Differences
- Props come from outside the component; state is managed inside the component.
- Props are used for configuration; state is used for dynamic data.
- A child should not directly modify props; state is updated with setters or reducers.

## Example
- Passing a username to a greeting card uses props.
- Updating a counter value inside a screen uses state.
