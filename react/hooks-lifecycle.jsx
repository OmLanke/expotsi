// =============================================================
// HOOKS LIFECYCLE
// =============================================================
//
// DEFINITION:
// Hooks lifecycle refers to how Hooks like useEffect run during
// mount, update, and unmount phases. It lets functional
// components manage side effects without class lifecycle methods.
//
// ADVANTAGES:
// - Replaces class lifecycle APIs with functional patterns.
// - Keeps side-effect logic close to related state.
// - Cleanup functions reduce memory leaks.
//
// DISADVANTAGES:
// - Dependency arrays can be confusing.
// - Incorrect dependencies may cause stale data bugs.
// - Overusing effects can make components harder to follow.
// =============================================================

import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HooksLifecycleDemo() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        setLogs((prev) => [...prev, "Mounted component"]);
        return () => {
            // Unmount cleanup
            console.log("Component unmounted");
        };
    }, []);

    useEffect(() => {
        if (!running) return;
        const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(timer);
    }, [running]);

    useEffect(() => {
        if (seconds > 0 && seconds % 5 === 0) {
            setLogs((prev) => [...prev, `Reached ${seconds}s`]);
        }
    }, [seconds]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hooks Lifecycle Demo</Text>

            <View style={styles.card}>
                <Text style={styles.clock}>Seconds: {seconds}</Text>
                <View style={styles.row}>
                    <Button title={running ? "Pause" : "Resume"} onPress={() => setRunning((r) => !r)} />
                    <Button title="Reset" color="#ef4444" onPress={() => setSeconds(0)} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Lifecycle Logs</Text>
                {logs.length === 0 ? (
                    <Text style={styles.log}>No logs yet</Text>
                ) : (
                    logs.slice(-5).map((entry, idx) => <Text key={idx} style={styles.log}>• {entry}</Text>)
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    clock: { fontSize: 24, fontWeight: "700", color: "#1e293b" },
    row: { flexDirection: "row", gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    log: { fontSize: 13, color: "#475569" },
});
