# React

## Definition
React is a JavaScript library for building UI with reusable components and declarative rendering.
It updates the view efficiently when application state changes.

## Advantages
- Encourages reusable, modular UI patterns.
- Declarative syntax makes UI logic easier to reason about.
- Large ecosystem and strong community support.

## Disadvantages
- Requires learning JSX and modern JavaScript patterns.
- Rapid ecosystem changes can create tooling churn.
- State architecture can become complex in large apps.

## Example Code

```javascript
import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello from React in Expo</Text>
    </SafeAreaView>
  );
}
```
