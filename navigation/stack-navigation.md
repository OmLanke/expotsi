# Stack Navigation

## Definition
Stack navigation manages screens in a last-in, first-out stack, similar to page history.
It is useful for detail flows like list → detail → edit.

## Advantages
- Natural pattern for drill-down navigation.
- Built-in header and back behavior.
- Easy to reason about screen transitions.

## Disadvantages
- Deep stacks can confuse user flow.
- Header customization can add complexity.
- Cross-stack navigation needs careful setup.

## Example Code

```javascript
import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return <Button title="Open Details" onPress={() => navigation.navigate("Details")} />;
}

function Details() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
