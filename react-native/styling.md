# Style

## Definition
Styling in React Native uses JavaScript objects to define visual presentation such as spacing, colors, and layout.
Most styling relies on Flexbox and `StyleSheet.create` for organization.

## Advantages
- Keeps styles close to component logic.
- Reuses style objects for consistency.
- Works consistently across iOS and Android.

## Disadvantages
- No full CSS feature parity.
- Large inline style objects can reduce readability.
- Platform-specific tweaks may still be required.

## Example Code

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Styled Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "700" },
});
```
