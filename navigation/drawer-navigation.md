# Drawer Navigation

## Idea
A sidebar menu opens from the left.

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
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

## Result UI

```
☰ Menu
Home
Settings
```
