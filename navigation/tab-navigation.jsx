// =============================================================
// TAB NAVIGATION
// =============================================================
//
// IDEA:
// Screens are parallel, user switches using tabs.
//
// DEFINITION:
// Tab navigation switches between top-level app sections using
// a tab bar. Each tab usually represents an independent branch.
//
// ADVANTAGES:
// - Fast access to primary app sections.
// - Familiar UX pattern for mobile users.
// - Keeps major screens one tap away.
//
// DISADVANTAGES:
// - Limited space for many tab labels.
// - Not ideal for deep hierarchical flows.
// - Can hide secondary actions behind too many sections.
// =============================================================

import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function HomeTab() {
    return (
        <View style={styles.tabBody}>
            <Text style={styles.tabTitle}>Home Tab</Text>
            <Text style={styles.tabText}>Overview, quick actions, and updates live here.</Text>
        </View>
    );
}

function ProfileTab() {
    return (
        <View style={styles.tabBody}>
            <Text style={styles.tabTitle}>Profile Tab</Text>
            <Text style={styles.tabText}>User info, preferences, and account controls.</Text>
        </View>
    );
}

function SettingsTab() {
    return (
        <View style={styles.tabBody}>
            <Text style={styles.tabTitle}>Settings Tab</Text>
            <Text style={styles.tabText}>Theme, notifications, privacy, and app behavior.</Text>
        </View>
    );
}

function TabButton({ label, active, onPress }) {
    return (
        <Pressable onPress={onPress} style={[styles.button, active && styles.buttonActive]}>
            <Text style={[styles.buttonText, active && styles.buttonTextActive]}>{label}</Text>
        </Pressable>
    );
}

export default function TabNavigationDemo() {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tab Navigation Demo</Text>

            <View style={styles.card}>
                {activeTab === "Home" && <HomeTab />}
                {activeTab === "Profile" && <ProfileTab />}
                {activeTab === "Settings" && <SettingsTab />}
            </View>

            <View style={styles.tabBar}>
                <TabButton label="Home" active={activeTab === "Home"} onPress={() => setActiveTab("Home")} />
                <TabButton label="Profile" active={activeTab === "Profile"} onPress={() => setActiveTab("Profile")} />
                <TabButton label="Settings" active={activeTab === "Settings"} onPress={() => setActiveTab("Settings")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    header: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 10 },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, minHeight: 170 },
    tabBody: { gap: 8 },
    tabTitle: { fontSize: 18, fontWeight: "700", color: "#1e293b" },
    tabText: { fontSize: 14, color: "#64748b" },
    tabBar: {
        flexDirection: "row",
        marginTop: 12,
        backgroundColor: "#e2e8f0",
        borderRadius: 10,
        padding: 6,
        gap: 6,
    },
    button: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: "center" },
    buttonActive: { backgroundColor: "white" },
    buttonText: { color: "#475569", fontSize: 13, fontWeight: "500" },
    buttonTextActive: { color: "#0f172a", fontWeight: "700" },
});
