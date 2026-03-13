// =============================================================
// useState
// =============================================================
//
// DEFINITION:
// useState is a Hook for storing and updating local component
// state. It triggers a re-render when the state value changes.
//
// ADVANTAGES:
// - Very simple API for local UI state.
// - Works naturally in functional components.
// - Great for small, isolated state values.
//
// DISADVANTAGES:
// - Multiple related states can become fragmented.
// - Complex transitions are harder to model.
// - Frequent updates may affect performance if unmanaged.
// =============================================================

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function UseStateDemo() {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState("Guest");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>useState Demo</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Counter State</Text>
                <Text style={styles.count}>Count: {count}</Text>
                <View style={styles.row}>
                    <Button title="-1" onPress={() => setCount((c) => c - 1)} />
                    <Button title="Reset" onPress={() => setCount(0)} />
                    <Button title="+1" onPress={() => setCount((c) => c + 1)} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Form State</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    value={username}
                    onChangeText={setUsername}
                />
                <Button title="Submit" onPress={() => setSubmitted(username.trim() || "Guest")} />
                <Text style={styles.result}>Hello, {submitted}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    count: { fontSize: 18, fontWeight: "700", color: "#0f172a" },
    row: { flexDirection: "row", gap: 8 },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
    },
    result: { fontSize: 14, color: "#334155" },
});
