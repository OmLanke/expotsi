// =============================================================
// REACT
// =============================================================
//
// DEFINITION:
// React is a JavaScript library for building UI with reusable
// components and declarative rendering. It updates the view
// efficiently when application state changes.
//
// ADVANTAGES:
// - Encourages reusable, modular UI patterns.
// - Declarative syntax makes UI logic easier to reason about.
// - Large ecosystem and strong community support.
//
// DISADVANTAGES:
// - Requires learning JSX and modern JavaScript patterns.
// - Rapid ecosystem changes can create tooling churn.
// - State architecture can become complex in large apps.
// =============================================================

import React, { useState } from "react";
import { SafeAreaView, Text, View, Pressable, StyleSheet } from "react-native";

function CounterCard() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Declarative Counter Component</Text>
            <Text style={styles.count}>Count: {count}</Text>
            <View style={styles.row}>
                <Pressable style={styles.btn} onPress={() => setCount((c) => c - 1)}>
                    <Text style={styles.btnText}>-1</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={() => setCount(0)}>
                    <Text style={styles.btnText}>Reset</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={() => setCount((c) => c + 1)}>
                    <Text style={styles.btnText}>+1</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default function ReactDemo() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hello from React in Expo</Text>
            <Text style={styles.subtitle}>UI = f(state), rendered from reusable components.</Text>
            <CounterCard />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    title: { fontSize: 24, fontWeight: "700", color: "#0f172a", marginBottom: 6 },
    subtitle: { fontSize: 14, color: "#64748b", marginBottom: 12 },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    count: { fontSize: 16, color: "#0f172a" },
    row: { flexDirection: "row", gap: 8 },
    btn: { backgroundColor: "#e2e8f0", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 },
    btnText: { fontSize: 13, fontWeight: "600", color: "#334155" },
});
