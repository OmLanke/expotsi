# Navigation Comparison

## Stack vs Tab vs Drawer
- Stack navigation is best for forward and backward screen flows such as Home → Details.
- Tab navigation is best for switching between a few primary sections.
- Drawer navigation is best when there are many top-level destinations and a side menu fits the app.

## Quick Differences
- Stack keeps navigation history naturally.
- Tab keeps major screens one tap away.
- Drawer saves screen space but can hide destinations.

## When to Use
- Detail flow: Stack
- Main app sections: Tab
- Larger menu-based app: Drawer

## Quick Recognition Trick

Look at the import:

```
createNativeStackNavigator → Stack navigation
createBottomTabNavigator   → Tab navigation
createDrawerNavigator      → Drawer navigation
```

## Nested Navigation Pattern

The most common real-world pattern used in React Native apps and interviews:

```
Stack
   └ Tab
        ├ Home
        ├ Profile
        └ Settings
```

A Stack navigator wraps a Tab navigator, allowing full-screen modals or detail screens to appear on top of any tab.
