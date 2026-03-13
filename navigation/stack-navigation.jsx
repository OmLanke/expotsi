// =============================================================
// STACK NAVIGATION
// =============================================================
//
// IDEA:
// Screens are pushed on top of each other like a stack.
//
// DEFINITION:
// Stack navigation manages screens in a last-in, first-out stack,
// similar to page history. It is useful for detail flows like
// list → detail → edit.
//
// ADVANTAGES:
// - Natural pattern for drill-down navigation.
// - Built-in header and back behavior.
// - Easy to reason about screen transitions.
//
// DISADVANTAGES:
// - Deep stacks can confuse user flow.
// - Header customization can add complexity.
// - Cross-stack navigation needs careful setup.
// =============================================================

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ onNavigate }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.desc}>Start here and navigate to Details.</Text>
            <Button title="Go to Details" onPress={() => onNavigate("Details", { from: "Home" })} />
        </View>
    );
}

function DetailsScreen({ params, onNavigate }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Details Screen</Text>
            <Text style={styles.desc}>Opened from: {params?.from ?? "Unknown"}</Text>
            <Button title="Go to Edit" onPress={() => onNavigate("Edit", { id: 101 })} />
        </View>
    );
}

function EditScreen({ params }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Edit Screen</Text>
            <Text style={styles.desc}>Editing item id: {params?.id ?? "N/A"}</Text>
        </View>
    );
}

export default function StackNavigationDemo() {
    const [stack, setStack] = useState([{ name: "Home", params: null }]);

    const navigate = (name, params = null) => {
        setStack((prev) => [...prev, { name, params }]);
    };

    const goBack = () => {
        setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };

    const reset = () => setStack([{ name: "Home", params: null }]);

    const current = stack[stack.length - 1];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Stack Navigation Demo</Text>
            <Text style={styles.path}>Path: {stack.map((s) => s.name).join(" → ")}</Text>

            <View style={styles.card}>
                {current.name === "Home" && <HomeScreen onNavigate={navigate} />}
                {current.name === "Details" && <DetailsScreen params={current.params} onNavigate={navigate} />}
                {current.name === "Edit" && <EditScreen params={current.params} />}
            </View>

            <View style={styles.row}>
                <Button title="Back" onPress={goBack} />
                <Button title="Reset" color="#ef4444" onPress={reset} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    header: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 8 },
    path: { fontSize: 13, color: "#475569", marginBottom: 10 },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, minHeight: 180 },
    screen: { gap: 10 },
    title: { fontSize: 18, fontWeight: "700", color: "#1e293b" },
    desc: { fontSize: 14, color: "#64748b" },
    row: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
});
