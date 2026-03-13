import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Greeting = React.memo(({ name, textColor }) => {
    return (
        <Text style={[styles.greetingText, { color: textColor }]}>
            Hello {name ? name : 'Guest'}!
        </Text>
    );
});

export default function Exp02Screen() {
    const { colors } = useTheme();

    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, []);

    const decrement = useCallback(() => {
        setCounter(c => c - 1);
    }, []);

    const reset = useCallback(() => {
        setCounter(0);
    }, []);

    const counterStatus = useMemo(() => {
        if (counter > 0) return 'Positive';
        if (counter < 0) return 'Negative';
        return 'Zero';
    }, [counter]);

    const getStatusColor = () => {
        if (counterStatus === 'Positive') return colors.success;
        if (counterStatus === 'Negative') return colors.danger;
        return colors.neutral;
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.scrollContent}>

            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Props & useState Demo</Text>
                <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.neutral }]}
                    placeholder="Enter your name"
                    placeholderTextColor={colors.neutral}
                    value={name}
                    onChangeText={setName}
                />
                <Greeting name={name} textColor={colors.text} />
            </View>

            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Counter with useCallback</Text>
                <Text style={[styles.counterText, { color: colors.text }]}>{counter}</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={decrement}>
                        <Text style={styles.buttonText}>-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.danger }]} onPress={reset}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.success }]} onPress={increment}>
                        <Text style={styles.buttonText}>+1</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>useMemo Status</Text>
                <Text style={[styles.statusText, { color: getStatusColor() }]}>
                    {counterStatus}
                </Text>
            </View>

        </ScrollView>
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
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 10,
        flex: 1,
        marginHorizontal: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    statusText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
