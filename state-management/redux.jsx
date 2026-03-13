// =============================================================
// REDUX
// =============================================================
//
// DEFINITION:
// Redux is a predictable state management library using a
// centralized store and pure reducers. In React Native, it is
// commonly used with React Redux for larger apps.
//
// ADVANTAGES:
// - Predictable unidirectional data flow.
// - Strong tooling for debugging and time travel.
// - Scales well for complex shared state.
//
// DISADVANTAGES:
// - Extra setup and boilerplate.
// - Can be excessive for small apps.
// - Requires understanding actions/reducers/middleware.
// =============================================================

import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { View, Text, Button, StyleSheet } from "react-native";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0, step: 1 },
    reducers: {
        increment: (state) => {
            state.value += state.step;
        },
        decrement: (state) => {
            state.value -= state.step;
        },
        setStepOne: (state) => {
            state.step = 1;
        },
        setStepFive: (state) => {
            state.step = 5;
        },
        reset: (state) => {
            state.value = 0;
            state.step = 1;
        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer },
});

function CounterPanel() {
    const value = useSelector((state) => state.counter.value);
    const step = useSelector((state) => state.counter.step);
    const dispatch = useDispatch();

    return (
        <View style={styles.card}>
            <Text style={styles.value}>Count: {value}</Text>
            <Text style={styles.line}>Step: {step}</Text>

            <View style={styles.row}>
                <Button title="-" onPress={() => dispatch(counterSlice.actions.decrement())} />
                <Button title="+" onPress={() => dispatch(counterSlice.actions.increment())} />
            </View>

            <View style={styles.row}>
                <Button title="Step 1" onPress={() => dispatch(counterSlice.actions.setStepOne())} />
                <Button title="Step 5" onPress={() => dispatch(counterSlice.actions.setStepFive())} />
            </View>

            <Button title="Reset" color="#ef4444" onPress={() => dispatch(counterSlice.actions.reset())} />
        </View>
    );
}

export default function ReduxDemo() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.title}>Redux Demo</Text>
                <CounterPanel />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 10 },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    value: { fontSize: 20, fontWeight: "700", color: "#1e293b" },
    line: { fontSize: 13, color: "#475569" },
    row: { flexDirection: "row", gap: 8 },
});
