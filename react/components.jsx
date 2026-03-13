// =============================================================
// COMPONENTS
// =============================================================
//
// DEFINITION:
// Components are reusable UI building blocks that receive inputs
// (props) and return rendered output. In React Native, they help
// structure screens into small, maintainable pieces.
//
// ADVANTAGES:
// - Improves code reuse across screens.
// - Makes UI easier to test and maintain.
// - Supports clear separation of concerns.
//
// DISADVANTAGES:
// - Too many tiny components can add file navigation overhead.
// - Poor prop design makes components hard to reuse.
// - Deep component trees may complicate debugging.
// =============================================================

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

function WelcomeCard({ name, role }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>Welcome, {name}!</Text>
            <Text style={styles.role}>Role: {role}</Text>
        </View>
    );
}

function Section({ title, children }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );
}

export default function ComponentsDemo() {
    const users = [
        { id: "1", name: "Expo Learner", role: "Student" },
        { id: "2", name: "Nina", role: "Developer" },
        { id: "3", name: "Rahul", role: "Designer" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Components Demo</Text>

            <Section title="Reusable Welcome Card">
                <WelcomeCard name="Expo Learner" role="Student" />
            </Section>

            <Section title="List Reuse with Props">
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <WelcomeCard name={item.name} role={item.role} />}
                    scrollEnabled={false}
                />
            </Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    section: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    sectionTitle: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    card: { padding: 10, borderRadius: 8, backgroundColor: "#f1f5f9" },
    name: { fontSize: 15, fontWeight: "600", color: "#0f172a" },
    role: { fontSize: 13, color: "#475569" },
});
