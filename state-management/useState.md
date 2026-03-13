# useState

## Definition
`useState` is a Hook for storing and updating local component state.
It triggers a re-render when the state value changes.

## Advantages
- Very simple API for local UI state.
- Works naturally in functional components.
- Great for small, isolated state values.

## Disadvantages
- Multiple related states can become fragmented.
- Complex transitions are harder to model.
- Frequent updates may affect performance if unmanaged.

## Example Code

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```
