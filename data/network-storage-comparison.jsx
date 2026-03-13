// =============================================================
// NETWORK AND STORAGE COMPARISON
// =============================================================
//
// FETCH vs AXIOS
// - fetch is built in and needs no extra dependency.
// - Axios provides interceptors, automatic JSON handling,
//   and cleaner request configuration.
// - Choose fetch for simple requests; choose Axios for
//   reusable API layers.
//
// ASYNCSTORAGE vs SQLITE vs REALM
// - AsyncStorage stores small key-value pairs like theme,
//   token, or preferences.
// - SQLite stores structured relational data using SQL tables.
// - Realm stores object-based local data with a mobile DB API.
//
// QUICK SELECTION GUIDE
// - Preferences or tokens: AsyncStorage
// - Offline tabular records and queries: SQLite
// - Rich object models with local persistence: Realm
// =============================================================

import React, { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const OPTIONS = {
    network: [
        { key: "fetch", title: "fetch", points: ["Built-in API", "Less setup", "Manual error handling"] },
        { key: "axios", title: "Axios", points: ["Interceptors", "Better defaults", "Extra dependency"] },
    ],
    storage: [
        { key: "async", title: "AsyncStorage", points: ["Key-value", "Simple", "Small data"] },
        { key: "sqlite", title: "SQLite", points: ["SQL tables", "Powerful queries", "Schema management"] },
        { key: "realm", title: "Realm", points: ["Object DB", "Reactive reads", "Custom ecosystem"] },
    ],
};

function Chip({ label, active, onPress }) {
    return (
        <Pressable onPress={onPress} style={[styles.chip, active && styles.chipActive]}>
            <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
        </Pressable>
    );
}

export default function NetworkStorageComparisonDemo() {
    const [networkChoice, setNetworkChoice] = useState("fetch");
    const [storageChoice, setStorageChoice] = useState("async");

    const selectedNetwork = useMemo(
        () => OPTIONS.network.find((item) => item.key === networkChoice),
        [networkChoice]
    );

    const selectedStorage = useMemo(
        () => OPTIONS.storage.find((item) => item.key === storageChoice),
        [storageChoice]
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Network & Storage Comparison</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Network Layer: fetch vs Axios</Text>
                <View style={styles.row}>
                    <Chip label="fetch" active={networkChoice === "fetch"} onPress={() => setNetworkChoice("fetch")} />
                    <Chip label="Axios" active={networkChoice === "axios"} onPress={() => setNetworkChoice("axios")} />
                </View>
                <Text style={styles.selection}>Selected: {selectedNetwork.title}</Text>
                {selectedNetwork.points.map((point, idx) => (
                    <Text key={idx} style={styles.point}>• {point}</Text>
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Storage Layer Selection</Text>
                <View style={styles.rowWrap}>
                    <Chip label="AsyncStorage" active={storageChoice === "async"} onPress={() => setStorageChoice("async")} />
                    <Chip label="SQLite" active={storageChoice === "sqlite"} onPress={() => setStorageChoice("sqlite")} />
                    <Chip label="Realm" active={storageChoice === "realm"} onPress={() => setStorageChoice("realm")} />
                </View>
                <Text style={styles.selection}>Selected: {selectedStorage.title}</Text>
                {selectedStorage.points.map((point, idx) => (
                    <Text key={idx} style={styles.point}>• {point}</Text>
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Quick Guide</Text>
                <Text style={styles.point}>• Small preferences → AsyncStorage</Text>
                <Text style={styles.point}>• Structured offline records → SQLite</Text>
                <Text style={styles.point}>• Reactive object models → Realm</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", marginBottom: 12, color: "#0f172a" },
    card: { backgroundColor: "#fff", borderRadius: 10, padding: 12, marginBottom: 12, gap: 6 },
    cardTitle: { fontSize: 15, fontWeight: "600", color: "#1e293b" },
    row: { flexDirection: "row", gap: 8 },
    rowWrap: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
    chip: { borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
    chipActive: { backgroundColor: "#e0f2fe", borderColor: "#38bdf8" },
    chipText: { fontSize: 13, color: "#334155" },
    chipTextActive: { color: "#0369a1", fontWeight: "600" },
    selection: { fontSize: 13, color: "#0f172a", marginTop: 4 },
    point: { fontSize: 13, color: "#475569" },
});
