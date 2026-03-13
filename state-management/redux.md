# Redux

## Definition
Redux is a predictable state management library using a centralized store and pure reducers.
In React Native, it is typically used with React Redux for larger apps.

## Advantages
- Predictable unidirectional data flow.
- Strong tooling for debugging and time travel.
- Scales well for complex shared state.

## Disadvantages
- Extra setup and boilerplate.
- Can be excessive for small apps.
- Requires understanding actions, reducers, and middleware.

## Example Code

```javascript
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { View, Text, Button } from "react-native";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: { increment: (state) => { state.value += 1; } },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{value}</Text>
      <Button title="Increase" onPress={() => dispatch(counterSlice.actions.increment())} />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```
