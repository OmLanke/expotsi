// =============================================================
// useReducer
// =============================================================
//
// DEFINITION:
// useReducer manages state transitions through a reducer function
// and dispatched actions. It is useful for complex local logic.
//
// ADVANTAGES:
// - Centralizes state updates in one predictable function.
// - Better for complex state than many useState calls.
// - Makes transitions explicit through action types.
//
// DISADVANTAGES:
// - More boilerplate for simple scenarios.
// - Action/reducer patterns add learning overhead.
// - Can become verbose without conventions.
// =============================================================

import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const initialState = {
    count: 0,
    step: 1,
    history: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + state.step,
                history: [...state.history, `+${state.step}`],
            };
        case "decrement":
            return {
                ...state,
                count: state.count - state.step,
                history: [...state.history, `-${state.step}`],
            };
        case "setStep":
            return { ...state, step: action.payload };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export default function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>useReducer Demo</Text>

            <View style={styles.card}>
                <Text style={styles.value}>Count: {state.count}</Text>
                <Text style={styles.line}>Step: {state.step}</Text>
                <View style={styles.row}>
                    <Button title="-" onPress={() => dispatch({ type: "decrement" })} />
                    <Button title="+" onPress={() => dispatch({ type: "increment" })} />
                </View>
                <View style={styles.row}>
                    <Button title="Step 1" onPress={() => dispatch({ type: "setStep", payload: 1 })} />
                    <Button title="Step 5" onPress={() => dispatch({ type: "setStep", payload: 5 })} />
                    <Button title="Reset" color="#ef4444" onPress={() => dispatch({ type: "reset" })} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Action History (last 6)</Text>
                {state.history.length === 0 ? (
                    <Text style={styles.line}>No actions yet.</Text>
                ) : (
                    state.history.slice(-6).map((entry, idx) => (
                        <Text key={idx} style={styles.line}>• {entry}</Text>
                    ))
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    value: { fontSize: 20, fontWeight: "700", color: "#0f172a" },
    line: { fontSize: 13, color: "#475569" },
    row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
});
