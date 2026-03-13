# Hooks Lifecycle

## Definition
Hooks lifecycle refers to how Hooks like `useEffect` run during mount, update, and unmount phases.
It lets functional components manage side effects without class lifecycle methods.

## Advantages
- Replaces class lifecycle APIs with simpler functional patterns.
- Keeps side-effect logic close to related state.
- Cleanup functions reduce memory leaks.

## Disadvantages
- Dependency arrays can be confusing for beginners.
- Incorrect dependencies may cause stale data bugs.
- Overusing effects can make components harder to follow.

## Example Code

```javascript
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Clock() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <Text>Seconds: {seconds}</Text>
    </View>
  );
}
```
