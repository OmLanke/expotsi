# Tab Navigation

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
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Feed() {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```
