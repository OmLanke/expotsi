// =============================================================
// EVENT HANDLING
// =============================================================
//
// DEFINITION:
// Event handling is responding to user actions such as taps,
// text input, scrolling, and switches. In React Native, events
// are usually handled with callback props like onPress,
// onChangeText, and onValueChange.
//
// ADVANTAGES:
// - Makes UI interactive and responsive.
// - Connects user actions to state updates.
// - Works well with Hooks and reusable components.
//
// DISADVANTAGES:
// - Too many inline handlers can hurt readability.
// - Complex event flows may need helper functions/memoization.
// - Uncontrolled updates can cause unnecessary re-renders.
// =============================================================

import React, { useState } from "react";
import { View, Text, TextInput, Button, Switch, StyleSheet } from "react-native";

export default function EventHandlingDemo() {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [count, setCount] = useState(0);

    const handleSubmit = () => {
        setSubmittedName(name.trim() || "Guest");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Handling Demo</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Text Input + Submit</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    value={name}
                    onChangeText={setName}
                />
                <Button title="Submit" onPress={handleSubmit} />
                {!!submittedName && <Text style={styles.result}>Hello, {submittedName}!</Text>}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Switch Event</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Newsletter</Text>
                    <Switch value={newsletter} onValueChange={setNewsletter} />
                </View>
                <Text style={styles.result}>{newsletter ? "Subscribed" : "Not subscribed"}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Button Press Count</Text>
                <Button title="Tap me" onPress={() => setCount((c) => c + 1)} />
                <Text style={styles.result}>Pressed {count} times</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
    },
    row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    label: { fontSize: 14, color: "#334155" },
    result: { fontSize: 13, color: "#475569" },
});
