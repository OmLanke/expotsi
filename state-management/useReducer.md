# useReducer

## Definition
`useReducer` manages state transitions through a reducer function and dispatched actions.
It is useful for more structured or complex local state logic.

## Advantages
- Centralizes state updates in one predictable function.
- Better for complex state than many `useState` calls.
- Makes transitions explicit through action types.

## Disadvantages
- More boilerplate for simple scenarios.
- Action and reducer patterns add learning overhead.
- Can become verbose without clear conventions.

## Example Code

```javascript
import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text>{state.count}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: "increment" })} />
    </View>
  );
}
```
