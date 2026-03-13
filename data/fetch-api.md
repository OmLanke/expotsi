# Fetch API

## Definition
Fetch API performs HTTP requests to retrieve or send data in React Native apps.
It is commonly used with JSON APIs and async/await.

## Advantages
- Native promise-based API with simple syntax.
- Works well for REST API integration.
- Flexible for headers, methods, and payloads.

## Disadvantages
- Requires manual error handling for non-2xx responses.
- No built-in request cancellation in basic usage.
- Repeated request logic can become duplicated.

## Example Code

```javascript
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function App() {
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    const load = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      setTitle(data.title);
    };
    load();
  }, []);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
```
