// =============================================================
// DRAWER NAVIGATION
// =============================================================
//
// IDEA:
// A sidebar menu opens from the left.
//
// DEFINITION:
// Drawer navigation provides a side panel menu for switching
// between app screens. It is useful when an app has multiple
// top-level destinations.
//
// ADVANTAGES:
// - Scales to many primary destinations.
// - Keeps the main screen uncluttered.
// - Supports custom drawer content and sections.
//
// DISADVANTAGES:
// - Hidden navigation can reduce discoverability.
// - Extra gesture behavior may conflict with screen interactions.
// - Setup can be heavier than simple tab navigation.
// =============================================================

import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SCREENS = ["Home", "Settings", "About", "Help"];

export default function DrawerNavigationDemo() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("Home");

    const selectScreen = (screen) => {
        setCurrentScreen(screen);
        setDrawerOpen(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => setDrawerOpen((prev) => !prev)} style={styles.menuBtn}>
                    <Text style={styles.menuText}>☰ Menu</Text>
                </Pressable>
                <Text style={styles.topTitle}>{currentScreen}</Text>
            </View>

            <View style={styles.body}>
                {drawerOpen && (
                    <View style={styles.drawer}>
                        {SCREENS.map((screen) => (
                            <Pressable
                                key={screen}
                                onPress={() => selectScreen(screen)}
                                style={[styles.drawerItem, currentScreen === screen && styles.drawerItemActive]}
                            >
                                <Text style={[styles.drawerText, currentScreen === screen && styles.drawerTextActive]}>
                                    {screen}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                )}

                <View style={styles.content}>
                    <Text style={styles.contentTitle}>{currentScreen} Screen</Text>
                    <Text style={styles.contentText}>
                        This area represents your main route content. Use the menu to switch sections.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8fafc" },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "#e2e8f0",
    },
    menuBtn: { paddingVertical: 6, paddingHorizontal: 10, backgroundColor: "#e2e8f0", borderRadius: 8 },
    menuText: { fontSize: 13, color: "#1e293b", fontWeight: "600" },
    topTitle: { fontSize: 16, fontWeight: "700", color: "#0f172a" },
    body: { flex: 1, flexDirection: "row" },
    drawer: {
        width: 180,
        backgroundColor: "white",
        borderRightWidth: 1,
        borderColor: "#e2e8f0",
        padding: 8,
        gap: 4,
    },
    drawerItem: { padding: 10, borderRadius: 8 },
    drawerItemActive: { backgroundColor: "#e0f2fe" },
    drawerText: { fontSize: 14, color: "#334155" },
    drawerTextActive: { color: "#0369a1", fontWeight: "700" },
    content: { flex: 1, padding: 16, justifyContent: "center" },
    contentTitle: { fontSize: 20, fontWeight: "700", color: "#0f172a", marginBottom: 8 },
    contentText: { fontSize: 14, color: "#64748b" },
});
