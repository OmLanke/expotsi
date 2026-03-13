# View

## Definition
`View` is the fundamental container component in React Native for layout and grouping UI elements.
It behaves similarly to a `div` in web development.

## Advantages
- Core building block for screen structure.
- Works seamlessly with Flexbox layout.
- Supports styling, touch handling, and nesting.

## Disadvantages
- Deep nesting can hurt readability.
- Overuse may create unnecessary render layers.
- Layout bugs can occur with complex Flexbox setups.

## Example Code

```javascript
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <Text>Header</Text>
      <View style={{ marginTop: 8 }}>
        <Text>Content block</Text>
      </View>
    </View>
  );
}
```
