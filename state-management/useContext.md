# useContext

## Definition
`useContext` reads shared values from a React context without prop drilling.
It is commonly used for app-wide concerns like themes or auth state.

## Advantages
- Reduces deeply nested prop passing.
- Great for globally shared, low-frequency state.
- Keeps consuming components clean.

## Disadvantages
- Broad context updates can re-render many consumers.
- Too many contexts can complicate architecture.
- Not a full replacement for advanced state libraries.

## Example Code

```javascript
import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";

const ThemeContext = createContext("light");

function Header() {
  const theme = useContext(ThemeContext);
  return <Text>Theme: {theme}</Text>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <View>
        <Header />
      </View>
    </ThemeContext.Provider>
  );
}
```
