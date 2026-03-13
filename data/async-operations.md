# Async Operations

## Definition
Async operations are non-blocking tasks like network calls, storage reads, and timers.
They keep the UI responsive while work completes in the background.

## Advantages
- Prevents UI freezing during long tasks.
- Supports cleaner flow with async/await.
- Makes network and storage logic practical in mobile apps.

## Disadvantages
- Error handling can be overlooked.
- Race conditions may occur with concurrent tasks.
- Loading and cancellation states add complexity.

## Example Code

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [status, setStatus] = useState("Idle");

  const runTask = async () => {
    setStatus("Working...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("Done");
  };

  return (
    <View>
      <Text>{status}</Text>
      <Button title="Run Async Task" onPress={runTask} />
    </View>
  );
}
```
