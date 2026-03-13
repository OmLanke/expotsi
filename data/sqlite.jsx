// =============================================================
// SQLITE
// =============================================================
//
// DEFINITION:
// SQLite is a lightweight relational database stored directly
// on the device. It is useful when an app needs structured
// tables, queries, and relationships for offline data.
//
// ADVANTAGES:
// - Works well for structured records and relational data.
// - Supports SQL queries, filters, sorting, and joins.
// - Good choice for larger offline datasets.
//
// DISADVANTAGES:
// - More setup than simple key-value storage.
// - Schema design and migrations must be managed carefully.
// - Not as flexible as object-style databases for nested data.
// =============================================================

import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

// NOTE:
// This example simulates SQL-table operations in-memory so it is
// easy to run everywhere. Replace with expo-sqlite APIs in app code.

function TableRow({ item }) {
    return (
        <View style={styles.tableRow}>
            <Text style={styles.col}>{item.id}</Text>
            <Text style={styles.col}>{item.name}</Text>
            <Text style={styles.col}>{item.roll}</Text>
        </View>
    );
}

export default function SqliteDemo() {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [query, setQuery] = useState("");
    const [rows, setRows] = useState([
        { id: 1, name: "Anushrut", roll: "42" },
        { id: 2, name: "Mira", roll: "18" },
    ]);

    const nextId = useMemo(
        () => (rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1),
        [rows]
    );

    const filtered = useMemo(() => {
        if (!query.trim()) return rows;
        const q = query.toLowerCase();
        return rows.filter((r) => r.name.toLowerCase().includes(q) || r.roll.toLowerCase().includes(q));
    }, [rows, query]);

    const insertRow = () => {
        if (!name.trim() || !roll.trim()) return;
        setRows((prev) => [...prev, { id: nextId, name: name.trim(), roll: roll.trim() }]);
        setName("");
        setRoll("");
    };

    const clearTable = () => setRows([]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SQLite Concepts Demo</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>INSERT INTO students</Text>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholder="Roll" value={roll} onChangeText={setRoll} />
                <View style={styles.row}>
                    <Button title="Insert Row" onPress={insertRow} />
                    <Button title="Clear Table" color="#ef4444" onPress={clearTable} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>SELECT * FROM students WHERE name LIKE ...</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Filter by name or roll"
                    value={query}
                    onChangeText={setQuery}
                />

                <View style={styles.tableHeader}>
                    <Text style={styles.headerCol}>ID</Text>
                    <Text style={styles.headerCol}>Name</Text>
                    <Text style={styles.headerCol}>Roll</Text>
                </View>

                <FlatList
                    data={filtered}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <TableRow item={item} />}
                    ListEmptyComponent={<Text style={styles.empty}>No rows found.</Text>}
                    scrollEnabled={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 12 },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, marginBottom: 12, gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "600", color: "#1e293b" },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
    },
    row: { flexDirection: "row", gap: 8 },
    tableHeader: { flexDirection: "row", paddingVertical: 6, borderBottomWidth: 1, borderColor: "#e2e8f0" },
    tableRow: { flexDirection: "row", paddingVertical: 6, borderBottomWidth: 1, borderColor: "#f1f5f9" },
    headerCol: { flex: 1, fontSize: 12, fontWeight: "700", color: "#334155" },
    col: { flex: 1, fontSize: 13, color: "#475569" },
    empty: { fontSize: 13, color: "#94a3b8" },
});
