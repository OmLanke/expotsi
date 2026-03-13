// =============================================================
// STATE MANAGEMENT COMPARISON
// =============================================================
//
// useState vs useReducer
// - useState for simple isolated local values.
// - useReducer for related fields and complex transitions.
//
// useContext vs Redux
// - Context for shared low-frequency state (theme, auth).
// - Redux for large apps with complex global state.
//
// useState vs Context
// - useState stores local component state.
// - Context shares values across component trees.
// =============================================================

import React, { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const OPTIONS = {
    useState: {
        title: "useState",
        bestFor: "Small local UI state",
        pros: ["Simple API", "Low boilerplate", "Fast to write"],
        tradeoffs: ["Can fragment related state", "Harder complex transitions"],
    },
    useReducer: {
        title: "useReducer",
        bestFor: "Complex local logic",
        pros: ["Predictable transitions", "Reducer-based structure", "Action-driven updates"],
        tradeoffs: ["More code", "More concepts"],
    },
    useContext: {
        title: "Context + useContext",
        bestFor: "Shared simple app-wide state",
        pros: ["Avoids prop drilling", "Built into React"],
        tradeoffs: ["Broad updates can re-render many consumers"],
    },
    redux: {
        title: "Redux",
        bestFor: "Large scalable global state",
        pros: ["Centralized store", "Great tooling", "Predictable architecture"],
        tradeoffs: ["Setup overhead", "Extra dependency"],
    },
};

function Selector({ label, active, onPress }) {
    return (
        <Pressable onPress={onPress} style={[styles.selector, active && styles.selectorActive]}>
            <Text style={[styles.selectorText, active && styles.selectorTextActive]}>{label}</Text>
        </Pressable>
    );
}

export default function StateManagementComparisonDemo() {
    const [selected, setSelected] = useState("useState");
    const info = useMemo(() => OPTIONS[selected], [selected]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>State Management Comparison</Text>

            <View style={styles.selectors}>
                {Object.keys(OPTIONS).map((key) => (
                    <Selector
                        key={key}
                        label={OPTIONS[key].title}
                        active={selected === key}
                        onPress={() => setSelected(key)}
                    />
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>{info.title}</Text>
                <Text style={styles.bestFor}>Best for: {info.bestFor}</Text>

                <Text style={styles.heading}>Pros</Text>
                {info.pros.map((point, idx) => <Text key={idx} style={styles.line}>• {point}</Text>)}

                <Text style={styles.heading}>Tradeoffs</Text>
                {info.tradeoffs.map((point, idx) => <Text key={idx} style={styles.line}>• {point}</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    selectors: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
    selector: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 999,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    selectorActive: { backgroundColor: "#e0f2fe", borderColor: "#38bdf8" },
    selectorText: { fontSize: 13, color: "#334155" },
    selectorTextActive: { color: "#0369a1", fontWeight: "700" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 4 },
    cardTitle: { fontSize: 17, fontWeight: "700", color: "#1e293b" },
    bestFor: { fontSize: 13, color: "#475569" },
    heading: { fontSize: 14, fontWeight: "700", color: "#334155", marginTop: 4 },
    line: { fontSize: 13, color: "#475569" },
});
