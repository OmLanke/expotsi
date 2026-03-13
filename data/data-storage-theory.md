# Data Storage Theory

## Definition
Data storage theory in Expo apps covers where and how app data is persisted, such as memory, local storage, or remote databases.
Choosing storage depends on sensitivity, lifespan, and sync requirements.

## Advantages
- Helps choose the right persistence strategy early.
- Improves performance and offline behavior planning.
- Supports better data security decisions.

## Disadvantages
- Adds architecture complexity upfront.
- Wrong choices can cause migration pain later.
- Security and sync constraints require careful design.

## Example Code

```javascript
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    AsyncStorage.getItem("username").then((value) => {
      if (value) setUsername(value);
    });
  }, []);

  return (
    <View>
      <Text>Stored user: {username}</Text>
    </View>
  );
}
```
