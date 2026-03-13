# Text

## Definition
`Text` displays readable content in React Native and is required for rendering strings on screen.
It supports nesting and text-specific styling.

## Advantages
- Simple API for showing labels and messages.
- Supports typography styles like size and weight.
- Allows nested text for inline formatting.

## Disadvantages
- Styling can vary slightly across platforms.
- Long text requires careful wrapping and truncation.
- Accessibility labels may be needed for clarity.

## Example Code

```javascript
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Profile</Text>
      <Text style={{ marginTop: 6 }}>Welcome to your Expo app.</Text>
    </View>
  );
}
```
