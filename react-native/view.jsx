// =============================================================
// VIEW
// =============================================================
//
// DEFINITION:
// View is the fundamental container component in React Native
// for layout and grouping UI elements. It behaves similarly to
// a div in web development.
//
// ADVANTAGES:
// - Core building block for screen structure.
// - Works seamlessly with Flexbox layout.
// - Supports styling, touch handling, and nesting.
//
// DISADVANTAGES:
// - Deep nesting can hurt readability.
// - Overuse may create unnecessary render layers.
// - Complex flex layouts can introduce bugs.
// =============================================================

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ViewDemo() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>View Demo</Text>

            <View style={styles.card}>
                <Text style={styles.section}>Header Section</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.box, styles.boxA]}>
                    <Text style={styles.boxText}>A</Text>
                </View>
                <View style={[styles.box, styles.boxB]}>
                    <Text style={styles.boxText}>B</Text>
                </View>
                <View style={[styles.box, styles.boxC]}>
                    <Text style={styles.boxText}>C</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.section}>Nested Content Block</Text>
                <View style={styles.nested}>
                    <Text style={styles.nestedText}>Nested View for grouping related UI.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    section: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    row: { flexDirection: "row", gap: 8 },
    box: { flex: 1, paddingVertical: 20, borderRadius: 10, alignItems: "center" },
    boxA: { backgroundColor: "#fee2e2" },
    boxB: { backgroundColor: "#dbeafe" },
    boxC: { backgroundColor: "#dcfce7" },
    boxText: { fontSize: 16, fontWeight: "700", color: "#334155" },
    nested: { borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 8, padding: 10 },
    nestedText: { fontSize: 13, color: "#475569" },
});
