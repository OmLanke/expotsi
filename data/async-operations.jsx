// =============================================================
// ASYNC OPERATIONS
// =============================================================
//
// DEFINITION:
// Async operations are non-blocking tasks like network calls,
// storage reads, and timers. They keep the UI responsive while
// work completes in the background.
//
// ADVANTAGES:
// - Prevents UI freezing during long tasks.
// - Supports cleaner flow with async/await.
// - Makes network and storage logic practical in mobile apps.
//
// DISADVANTAGES:
// - Error handling can be overlooked.
// - Race conditions may occur with concurrent tasks.
// - Loading and cancellation states add complexity.
// =============================================================

import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";

// --- Helper: simulate a network or storage delay ---
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- Helper: simulate a task that may fail ---
async function riskyTask() {
    await delay(800);
    if (Math.random() < 0.4) throw new Error("Task failed unexpectedly");
    return "Risky task succeeded";
}

// --- Sub-component: shows the result of a single async task ---
function TaskResult({ label, result, error }) {
    if (error) return <Text style={styles.error}>✗ {label}: {error}</Text>;
    if (result) return <Text style={styles.success}>✓ {label}: {result}</Text>;
    return <Text style={styles.muted}>— {label}: not started</Text>;
}

export default function AsyncOperationsDemo() {
    const [status, setStatus] = useState("Idle");
    const [loading, setLoading] = useState(false);

    // Task 1: simple sequential async tasks
    const [steps, setSteps] = useState([]);

    // Task 2: parallel async tasks
    const [parallelResults, setParallelResults] = useState([]);

    // Task 3: risky task with error handling
    const [riskyResult, setRiskyResult] = useState(null);
    const [riskyError, setRiskyError] = useState(null);

    // --- Run sequential steps ---
    const runSequential = async () => {
        setSteps([]);
        setLoading(true);
        setStatus("Running sequential tasks...");

        await delay(600);
        setSteps((prev) => [...prev, "Step 1: Fetched user profile"]);

        await delay(600);
        setSteps((prev) => [...prev, "Step 2: Loaded preferences"]);

        await delay(600);
        setSteps((prev) => [...prev, "Step 3: Synced notifications"]);

        setStatus("Sequential tasks done");
        setLoading(false);
    };

    // --- Run parallel tasks using Promise.all ---
    const runParallel = async () => {
        setParallelResults([]);
        setLoading(true);
        setStatus("Running parallel tasks...");

        const [a, b, c] = await Promise.all([
            delay(500).then(() => "Posts loaded"),
            delay(700).then(() => "Comments loaded"),
            delay(400).then(() => "Likes loaded"),
        ]);

        setParallelResults([a, b, c]);
        setStatus("Parallel tasks done");
        setLoading(false);
    };

    // --- Run a task that might fail ---
    const runRisky = async () => {
        setRiskyResult(null);
        setRiskyError(null);
        setStatus("Running risky task...");
        try {
            const result = await riskyTask();
            setRiskyResult(result);
            setStatus("Risky task succeeded");
        } catch (err) {
            setRiskyError(err.message);
            setStatus("Risky task failed");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Async Operations Demo</Text>

            <Text style={styles.statusLabel}>Status: <Text style={styles.status}>{status}</Text></Text>
            {loading && <ActivityIndicator style={styles.spinner} color="#3b82f6" />}

            {/* Sequential */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sequential Tasks</Text>
                <Button title="Run Sequential" onPress={runSequential} />
                {steps.map((s, i) => (
                    <Text key={i} style={styles.step}>• {s}</Text>
                ))}
            </View>

            {/* Parallel */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Parallel Tasks (Promise.all)</Text>
                <Button title="Run Parallel" onPress={runParallel} />
                {parallelResults.map((r, i) => (
                    <Text key={i} style={styles.step}>• {r}</Text>
                ))}
            </View>

            {/* Risky */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Error Handling</Text>
                <Button title="Run Risky Task (may fail)" onPress={runRisky} />
                <TaskResult label="Risky" result={riskyResult} error={riskyError} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", marginBottom: 12, color: "#1e293b" },
    statusLabel: { fontSize: 14, color: "#475569", marginBottom: 4 },
    status: { fontWeight: "600", color: "#0f172a" },
    spinner: { marginVertical: 8 },
    section: { marginTop: 20, padding: 12, backgroundColor: "#fff", borderRadius: 10, gap: 8 },
    sectionTitle: { fontSize: 16, fontWeight: "600", color: "#334155", marginBottom: 4 },
    step: { fontSize: 13, color: "#64748b", marginTop: 4 },
    success: { fontSize: 13, color: "#16a34a", marginTop: 6 },
    error: { fontSize: 13, color: "#dc2626", marginTop: 6 },
    muted: { fontSize: 13, color: "#94a3b8", marginTop: 6 },
});
