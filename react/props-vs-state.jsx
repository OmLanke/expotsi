// =============================================================
// PROPS vs STATE
// =============================================================
//
// PROPS:
// Props are inputs passed from a parent component to a child.
// They are read-only inside the receiving component.
//
// STATE:
// State is data owned and updated by a component.
// When state changes, the component re-renders.
//
// DIFFERENCES:
// - Props come from outside; state is managed inside.
// - Props configure behavior; state holds dynamic data.
// - Child components should not modify props directly.
// =============================================================

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function GreetingCard({ username }) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Props Example (Read-only)</Text>
            <Text style={styles.line}>Hello, {username}!</Text>
            <Text style={styles.note}>This value is passed from parent as a prop.</Text>
        </View>
    );
}

function CounterStateCard() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>State Example (Mutable)</Text>
            <Text style={styles.line}>Count: {count}</Text>
            <View style={styles.row}>
                <Button title="-" onPress={() => setCount((c) => c - 1)} />
                <Button title="Reset" onPress={() => setCount(0)} />
                <Button title="+" onPress={() => setCount((c) => c + 1)} />
            </View>
        </View>
    );
}

export default function PropsVsStateDemo() {
    const [nameInput, setNameInput] = useState("Expo Learner");
    const [appliedName, setAppliedName] = useState("Expo Learner");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Props vs State Demo</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Parent State Controls Child Props</Text>
                <TextInput
                    style={styles.input}
                    value={nameInput}
                    onChangeText={setNameInput}
                    placeholder="Enter username"
                />
                <Button title="Apply Name to Child Prop" onPress={() => setAppliedName(nameInput.trim() || "Guest")} />
            </View>

            <GreetingCard username={appliedName} />
            <CounterStateCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    line: { fontSize: 14, color: "#334155" },
    note: { fontSize: 13, color: "#64748b" },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
    },
    row: { flexDirection: "row", gap: 8 },
});
