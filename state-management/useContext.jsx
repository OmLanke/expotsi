// =============================================================
// useContext
// =============================================================
//
// DEFINITION:
// useContext reads shared values from a React context without
// prop drilling. It is commonly used for app-wide concerns like
// theme or auth state.
//
// ADVANTAGES:
// - Reduces deeply nested prop passing.
// - Great for globally shared, low-frequency state.
// - Keeps consuming components clean.
//
// DISADVANTAGES:
// - Broad context updates can re-render many consumers.
// - Too many contexts can complicate architecture.
// - Not a full replacement for advanced state libraries.
// =============================================================

import React, { createContext, useContext, useMemo, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ThemeContext = createContext(null);

function ThemeHeader() {
    const { theme } = useContext(ThemeContext);
    return <Text style={styles.header}>Theme: {theme}</Text>;
}

function ThemePreview() {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.preview, theme === "dark" && styles.previewDark]}>
            <Text style={[styles.previewText, theme === "dark" && styles.previewTextDark]}>
                Shared context value is applied here.
            </Text>
        </View>
    );
}

function ThemeControls() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Button
            title={`Switch to ${theme === "light" ? "dark" : "light"}`}
            onPress={toggleTheme}
        />
    );
}

export default function UseContextDemo() {
    const [theme, setTheme] = useState("light");

    const value = useMemo(
        () => ({
            theme,
            toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            <View style={styles.container}>
                <Text style={styles.title}>useContext Demo</Text>
                <View style={styles.card}>
                    <ThemeHeader />
                    <ThemePreview />
                    <ThemeControls />
                </View>
            </View>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 10 },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 10 },
    header: { fontSize: 16, fontWeight: "700", color: "#1e293b" },
    preview: { borderRadius: 8, padding: 12, backgroundColor: "#f1f5f9" },
    previewDark: { backgroundColor: "#1e293b" },
    previewText: { fontSize: 13, color: "#334155" },
    previewTextDark: { color: "#e2e8f0" },
});
