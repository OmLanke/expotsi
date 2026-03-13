# Components

## Definition
Components are reusable UI building blocks that receive inputs (props) and return rendered output.
In React Native, they help structure screens into small, maintainable pieces.

## Advantages
- Improves code reuse across screens.
- Makes UI easier to test and maintain.
- Supports clear separation of concerns.

## Disadvantages
- Too many small components can increase file navigation overhead.
- Poor prop design can make components hard to reuse.
- Deep component trees may complicate debugging.

## Example Code

```javascript
import React from "react";
import { View, Text } from "react-native";

function WelcomeCard({ name }) {
  return (
    <View>
      <Text>Welcome, {name}!</Text>
    </View>
  );
}

export default function App() {
  return <WelcomeCard name="Expo Learner" />;
}
```
