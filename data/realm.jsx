// =============================================================
// REALM
// =============================================================
//
// DEFINITION:
// Realm is an object database for mobile apps that stores data
// as live objects instead of SQL tables. It is useful for apps
// that need fast local persistence with object-oriented access.
//
// ADVANTAGES:
// - Object-based API feels natural in JavaScript apps.
// - Fast reads and writes for many mobile use cases.
// - Supports reactive patterns with live-updating objects.
//
// DISADVANTAGES:
// - Extra dependency and database-specific concepts.
// - Less universal than SQL for relational-first teams.
// - Schema changes still require migration planning.
// =============================================================

import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

// NOTE:
// This demo simulates Realm behavior in-memory so it runs without
// native setup. The comments below show real Realm setup steps.
//
// Real setup pattern (conceptual):
// 1) Define schema class/object
// 2) await Realm.open({ schema: [StudentSchema] })
// 3) realm.write(() => realm.create("Student", ...))
// 4) const students = realm.objects("Student")

function StudentRow({ item }) {
    return <Text style={styles.item}>• #{item.id} {item.name} (Roll: {item.roll})</Text>;
}

export default function RealmDemo() {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [students, setStudents] = useState([
        { id: 1, name: "Anushrut", roll: "42" },
    ]);

    const nextId = useMemo(
        () => (students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1),
        [students]
    );

    const addStudent = () => {
        if (!name.trim() || !roll.trim()) return;
        setStudents((prev) => [...prev, { id: nextId, name: name.trim(), roll: roll.trim() }]);
        setName("");
        setRoll("");
    };

    const deleteLast = () => {
        setStudents((prev) => prev.slice(0, -1));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Realm Concepts Demo</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Create Student Object</Text>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholder="Roll" value={roll} onChangeText={setRoll} />
                <View style={styles.row}>
                    <Button title="Add Student" onPress={addStudent} />
                    <Button title="Delete Last" color="#ef4444" onPress={deleteLast} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Live Student Objects</Text>
                <FlatList
                    data={students}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <StudentRow item={item} />}
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
    item: { fontSize: 13, color: "#334155" },
});
