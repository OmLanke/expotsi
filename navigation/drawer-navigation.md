# Drawer Navigation

## Definition
Drawer navigation provides a side panel menu for switching between app screens.
It is useful when an app has multiple top-level destinations.

## Advantages
- Scales to many primary destinations.
- Keeps the main screen uncluttered.
- Supports custom drawer content and sections.

## Disadvantages
- Hidden navigation can reduce discoverability.
- Extra gesture behavior may conflict with screen interactions.
- Setup can be heavier than simple tab navigation.

## Example Code

```javascript
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```
