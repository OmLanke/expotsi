# Axios

## Definition
Axios is a promise-based HTTP client used to send API requests with simpler defaults for JSON, headers, and interceptors.
It is commonly chosen when apps need reusable request configuration and centralized error handling.

## Advantages
- Cleaner request and response handling than raw network code in many cases.
- Supports interceptors for auth tokens, logging, and retry logic.
- Automatically parses JSON responses.

## Disadvantages
- Adds an external dependency for something `fetch` can already do.
- Bundle size increases slightly.
- Can be unnecessary for small projects with simple requests.

## Example Code

```javascript
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default function App() {
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    const load = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      setTitle(response.data.title);
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
