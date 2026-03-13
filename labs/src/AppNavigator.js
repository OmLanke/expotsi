import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { store } from './store/store';

import Exp01Screen from './screens/Exp01Screen';
import Exp02Screen from './screens/Exp02Screen';
import Exp03Screen from './screens/Exp03Screen';
import Exp04Screen from './screens/Exp04Screen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#4a90e2',
                tabBarInactiveTintColor: colors.neutral,
                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopColor: 'rgba(0,0,0,0.05)',
                },
                headerStyle: {
                    backgroundColor: '#4a90e2',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Tab.Screen
                name="Exp01"
                component={Exp01Screen}
                options={{ title: 'Setup', tabBarLabel: 'Setup' }}
            />
            <Tab.Screen
                name="Exp02"
                component={Exp02Screen}
                options={{ title: 'State', tabBarLabel: 'State' }}
            />
            <Tab.Screen
                name="Exp03"
                component={Exp03Screen}
                options={{ title: 'Nav', tabBarLabel: 'Nav' }}
            />
            <Tab.Screen
                name="Exp04"
                component={Exp04Screen}
                options={{ title: 'Redux', tabBarLabel: 'Redux' }}
            />
        </Tab.Navigator>
    );
}

export default function ADRNLabApp() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <NavigationContainer independent={true}>
                    <TabNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
}
