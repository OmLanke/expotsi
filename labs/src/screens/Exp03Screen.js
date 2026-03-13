import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    const { colors } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Stack Navigation Demo</Text>
                <Text style={[styles.text, { color: colors.text }]}>This is the Home Screen of Experiment 3.</Text>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: colors.primary, marginTop: 16 }]}
                    onPress={() => navigation.navigate('Details', { userName: 'Anushrut', roll: '42' })}
                >
                    <Text style={styles.buttonText}>Go to Details Screen (Pass Params)</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Navigation Types Explained</Text>
                <Text style={[styles.listItem, { color: colors.text }]}>1. Stack Navigator: Pushes new screens on top of a stack (like a deck of cards).</Text>
                <Text style={[styles.listItem, { color: colors.text }]}>2. Tab Navigator: Switches between screens using a bottom or top bar (used in the main app).</Text>
                <Text style={[styles.listItem, { color: colors.text }]}>3. Drawer Navigator: A hidden menu that slides in from the side of the screen.</Text>
                <Text style={[styles.listItem, { color: colors.text }]}>4. Passing Params: Sending data between routes using navigation.navigate('Route', data).</Text>
            </View>
        </ScrollView>
    );
}

function DetailsScreen({ route, navigation }) {
    const { colors } = useTheme();
    const { userName, roll } = route.params || {};

    return (
        <View style={[styles.container, { backgroundColor: colors.background, padding: 16 }]}>
            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Received Parameters</Text>
                <Text style={[styles.text, { color: colors.text, fontSize: 18, marginBottom: 8 }]}>Name: {userName}</Text>
                <Text style={[styles.text, { color: colors.text, fontSize: 18 }]}>Roll No: {roll}</Text>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: colors.danger, marginTop: 24 }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function Exp03Screen() {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.card,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Exp 3 Home' }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Screen' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
    },
    card: {
        borderRadius: 12,
        elevation: 2,
        padding: 16,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    sectionLabel: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
    },
    listItem: {
        fontSize: 15,
        marginBottom: 8,
        lineHeight: 22,
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
