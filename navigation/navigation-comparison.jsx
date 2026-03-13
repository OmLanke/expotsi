// =============================================================
// NAVIGATION COMPARISON
// =============================================================
//
// STACK vs TAB vs DRAWER
// - Stack is best for forward/back flows (Home → Details).
// - Tab is best for switching between a few primary sections.
// - Drawer is best for many top-level destinations.
//
// QUICK DIFFERENCES
// - Stack keeps navigation history naturally.
// - Tab keeps major screens one tap away.
// - Drawer saves screen space but can hide destinations.
//
// WHEN TO USE
// - Detail flow: Stack
// - Main app sections: Tab
// - Larger menu-based app: Drawer
// =============================================================

import React, { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const TYPES = {
    stack: {
        title: "Stack Navigation",
        useFor: "Flows with drill-down and back navigation",
        strengths: ["Natural history", "Great for details screens", "Simple transitions"],
        caveats: ["Can become deep", "Header setup needed"],
        pattern: "Home → Details → Edit",
    },
    tab: {
        title: "Tab Navigation",
        useFor: "Top-level app sections",
        strengths: ["Fast switching", "Always visible options", "Mobile-familiar UI"],
        caveats: ["Limited tab count", "Not ideal for deep routes"],
        pattern: "Home | Profile | Settings",
    },
    drawer: {
        title: "Drawer Navigation",
        useFor: "Apps with many sections",
        strengths: ["Scales menu size", "Keeps UI clean", "Custom drawer groups"],
        caveats: ["Hidden discoverability", "More setup"],
        pattern: "☰ Menu → Select destination",
    },
};

function SwitchButton({ label, active, onPress }) {
    return (
        <Pressable onPress={onPress} style={[styles.switchBtn, active && styles.switchBtnActive]}>
            <Text style={[styles.switchText, active && styles.switchTextActive]}>{label}</Text>
        </Pressable>
    );
}

export default function NavigationComparisonDemo() {
    const [mode, setMode] = useState("stack");

    const info = useMemo(() => TYPES[mode], [mode]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Navigation Comparison</Text>

            <View style={styles.switchRow}>
                <SwitchButton label="Stack" active={mode === "stack"} onPress={() => setMode("stack")} />
                <SwitchButton label="Tab" active={mode === "tab"} onPress={() => setMode("tab")} />
                <SwitchButton label="Drawer" active={mode === "drawer"} onPress={() => setMode("drawer")} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>{info.title}</Text>
                <Text style={styles.useFor}>Use for: {info.useFor}</Text>

                <Text style={styles.subhead}>Strengths</Text>
                {info.strengths.map((s, idx) => <Text key={idx} style={styles.line}>• {s}</Text>)}

                <Text style={styles.subhead}>Caveats</Text>
                {info.caveats.map((c, idx) => <Text key={idx} style={styles.line}>• {c}</Text>)}

                <Text style={styles.subhead}>Typical Pattern</Text>
                <Text style={styles.pattern}>{info.pattern}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subhead}>Common Nested Pattern</Text>
                <Text style={styles.pattern}>Stack → Tab → (Home | Profile | Settings)</Text>
                <Text style={styles.line}>A stack wraps tabs so full-screen details can appear above any tab.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    header: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 10 },
    switchRow: { flexDirection: "row", gap: 8, marginBottom: 10 },
    switchBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: "center",
        backgroundColor: "white",
    },
    switchBtnActive: { borderColor: "#38bdf8", backgroundColor: "#e0f2fe" },
    switchText: { color: "#334155", fontSize: 13 },
    switchTextActive: { color: "#0369a1", fontWeight: "700" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, marginBottom: 10, gap: 4 },
    title: { fontSize: 17, fontWeight: "700", color: "#1e293b" },
    useFor: { fontSize: 13, color: "#475569", marginBottom: 4 },
    subhead: { fontSize: 14, fontWeight: "700", color: "#334155", marginTop: 4 },
    line: { fontSize: 13, color: "#475569" },
    pattern: { fontSize: 13, color: "#0f172a", fontWeight: "600" },
});
