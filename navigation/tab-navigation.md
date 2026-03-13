# Tab Navigation

## Idea
Screens are parallel, user switches using tabs.

## Definition
Tab navigation switches between top-level app sections using a tab bar.
Each tab usually represents an independent navigation branch.

## Advantages
- Fast access to primary app sections.
- Familiar UX pattern for mobile users.
- Keeps major screens one tap away.

## Disadvantages
- Limited space for many tab labels.
- Not ideal for deep hierarchical flows.
- Can hide secondary actions behind too many sections.

## Example Code

```javascript
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Tab</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Tab</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

## Result UI

```
[ Home ]   [ Profile ]
```
