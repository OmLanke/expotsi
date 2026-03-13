# Event Handling

## Definition
Event handling is the process of responding to user actions such as taps, text input, scrolling, and switches.
In React Native, events are usually handled with callback props like `onPress`, `onChangeText`, and `onValueChange`.

## Advantages
- Makes UI interactive and responsive.
- Keeps user actions connected to state updates.
- Works well with Hooks and reusable components.

## Disadvantages
- Too many inline handlers can hurt readability.
- Complex event flows may require memoization or separation into helper functions.
- Uncontrolled updates can cause unnecessary re-renders.

## Example Code

```javascript
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submitted && <Text>Hello, {name || "Guest"}!</Text>}
    </View>
  );
}
```
