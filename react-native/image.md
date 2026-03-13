# Image

## Definition
`Image` renders local or remote images in React Native applications.
It supports sizing, resize modes, and caching behavior for better UX.

## Advantages
- Easy display of assets and remote media.
- Supports multiple resize strategies.
- Integrates with style props for layout control.

## Disadvantages
- Remote images may load slowly on weak networks.
- Incorrect dimensions can distort visuals.
- Requires optimization to avoid memory pressure.

## Example Code

```javascript
import React from "react";
import { View, Image } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200, borderRadius: 12 }}
      />
    </View>
  );
}
```
