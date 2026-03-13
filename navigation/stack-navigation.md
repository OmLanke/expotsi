# Stack Navigation

## Idea
Screens are pushed on top of each other like a stack.

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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Key Line

```javascript
navigation.navigate("Details")
```
