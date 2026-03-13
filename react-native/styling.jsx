// =============================================================
// STYLING
// =============================================================
//
// DEFINITION:
// Styling in React Native uses JavaScript objects to define
// visual presentation such as spacing, colors, and layout.
// Most styling relies on Flexbox and StyleSheet.create.
//
// ADVANTAGES:
// - Keeps styles close to component logic.
// - Reuses style objects for consistency.
// - Works across iOS and Android.
//
// DISADVANTAGES:
// - No full CSS feature parity.
// - Large inline styles can reduce readability.
// - Platform-specific tweaks may still be required.
// =============================================================

import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function StylingDemo() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <View style={[styles.container, darkMode && styles.containerDark]}>
            <Text style={[styles.title, darkMode && styles.titleDark]}>Styled Screen</Text>
            <Text style={[styles.subtitle, darkMode && styles.subtitleDark]}>
                Demonstrates reusable StyleSheet patterns with conditional styles.
            </Text>

            <View style={[styles.card, darkMode && styles.cardDark]}>
                <Text style={[styles.cardTitle, darkMode && styles.cardTitleDark]}>Theme Toggle</Text>
                <View style={styles.row}>
                    <Text style={[styles.text, darkMode && styles.textDark]}>{darkMode ? "Dark" : "Light"} mode</Text>
                    <Switch value={darkMode} onValueChange={setDarkMode} />
                </View>
            </View>

            <View style={styles.grid}>
                <View style={[styles.tile, { backgroundColor: "#dbeafe" }]}><Text style={styles.tileText}>Spacing</Text></View>
                <View style={[styles.tile, { backgroundColor: "#dcfce7" }]}><Text style={styles.tileText}>Radius</Text></View>
                <View style={[styles.tile, { backgroundColor: "#fee2e2" }]}><Text style={styles.tileText}>Typography</Text></View>
                <View style={[styles.tile, { backgroundColor: "#ede9fe" }]}><Text style={styles.tileText}>Layout</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    containerDark: { backgroundColor: "#0f172a" },
    title: { fontSize: 24, fontWeight: "700", color: "#0f172a", marginBottom: 4 },
    titleDark: { color: "#f8fafc" },
    subtitle: { fontSize: 14, color: "#64748b", marginBottom: 12 },
    subtitleDark: { color: "#94a3b8" },
    card: { backgroundColor: "white", borderRadius: 12, padding: 12, marginBottom: 12, gap: 8 },
    cardDark: { backgroundColor: "#1e293b" },
    cardTitle: { fontSize: 16, fontWeight: "700", color: "#1e293b" },
    cardTitleDark: { color: "#e2e8f0" },
    row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    text: { fontSize: 14, color: "#334155" },
    textDark: { color: "#cbd5e1" },
    grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
    tile: { width: "47%", borderRadius: 10, paddingVertical: 24, alignItems: "center" },
    tileText: { fontSize: 14, fontWeight: "600", color: "#334155" },
});
