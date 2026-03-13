// =============================================================
// DATA STORAGE THEORY
// =============================================================
//
// DEFINITION:
// Data storage theory in Expo apps covers where and how app
// data is persisted, such as memory, local storage, or remote
// databases. Choosing storage depends on sensitivity, lifespan,
// and sync requirements.
//
// ADVANTAGES:
// - Helps choose the right persistence strategy early.
// - Improves performance and offline behavior planning.
// - Supports better data security decisions.
//
// DISADVANTAGES:
// - Adds architecture complexity upfront.
// - Wrong choices can cause migration pain later.
// - Security and sync constraints require careful design.
//
// STORAGE TYPES:
// 1. In-Memory (useState / useReducer)
//    - Lives only while the app is running. Lost on restart.
//    - Use for: temporary UI state, form inputs, toggles.
//
// 2. AsyncStorage
//    - Key-value store persisted to device storage.
//    - Use for: tokens, preferences, small user settings.
//
// 3. SQLite (expo-sqlite)
//    - Relational DB. Supports SQL queries, tables, joins.
//    - Use for: structured offline records.
//
// 4. Realm
//    - Object-based local DB with reactive queries.
//    - Use for: complex object models, live-updating lists.
//
// 5. Remote (REST / GraphQL)
//    - Server-side database accessed via HTTP.
//    - Use for: shared data, multi-device sync.
// =============================================================

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
    USERNAME: "username",
    THEME: "theme",
    HISTORY: "history",
};

// --- Sub-component: a labelled key-value row ---
function StorageRow({ label, value }) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value ?? "—"}</Text>
        </View>
    );
}

export default function DataStorageDemo() {
    const [username, setUsername] = useState("Guest");
    const [theme, setTheme] = useState("light");
    const [history, setHistory] = useState([]);
    const [inputName, setInputName] = useState("");

    // --- Load all stored values on mount ---
    useEffect(() => {
        const loadAll = async () => {
            const [[, storedName], [, storedTheme], [, storedHistory]] =
                await AsyncStorage.multiGet([KEYS.USERNAME, KEYS.THEME, KEYS.HISTORY]);

            if (storedName) setUsername(storedName);
            if (storedTheme) setTheme(storedTheme);
            if (storedHistory) setHistory(JSON.parse(storedHistory));
        };
        loadAll();
    }, []);

    // --- Save username ---
    const saveName = async () => {
        if (!inputName.trim()) return;
        await AsyncStorage.setItem(KEYS.USERNAME, inputName.trim());
        const newEntry = `Changed name to "${inputName.trim()}"`;
        const updated = [...history, newEntry].slice(-5);
        await AsyncStorage.setItem(KEYS.HISTORY, JSON.stringify(updated));
        setUsername(inputName.trim());
        setHistory(updated);
        setInputName("");
    };

    // --- Toggle theme and persist ---
    const toggleTheme = async () => {
        const next = theme === "light" ? "dark" : "light";
        await AsyncStorage.setItem(KEYS.THEME, next);
        setTheme(next);
    };

    // --- Clear all stored data ---
    const clearAll = async () => {
        await AsyncStorage.multiRemove([KEYS.USERNAME, KEYS.THEME, KEYS.HISTORY]);
        setUsername("Guest");
        setTheme("light");
        setHistory([]);
        setInputName("");
    };

    return (
        <View style={[styles.container, theme === "dark" && styles.dark]}>
            <Text style={[styles.title, theme === "dark" && styles.textLight]}>
                Data Storage Demo
            </Text>

            {/* Current stored state */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Persisted Values</Text>
                <StorageRow label="Username" value={username} />
                <StorageRow label="Theme" value={theme} />
            </View>

            {/* Change username */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Update Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new username"
                    value={inputName}
                    onChangeText={setInputName}
                />
                <Button title="Save Username" onPress={saveName} />
            </View>

            {/* Toggle theme */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Toggle Theme</Text>
                <Button
                    title={`Switch to ${theme === "light" ? "Dark" : "Light"}`}
                    onPress={toggleTheme}
                />
            </View>

            {/* History log */}
            {history.length > 0 && (
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Change History (last 5)</Text>
                    <FlatList
                        data={history}
                        keyExtractor={(_, i) => String(i)}
                        renderItem={({ item }) => (
                            <Text style={styles.historyItem}>• {item}</Text>
                        )}
                        scrollEnabled={false}
                    />
                </View>
            )}

            <Button title="Clear All Storage" color="#ef4444" onPress={clearAll} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f8fafc" },
    dark: { backgroundColor: "#0f172a" },
    title: { fontSize: 22, fontWeight: "700", marginBottom: 12, color: "#1e293b" },
    textLight: { color: "#f1f5f9" },
    card: {
        backgroundColor: "#fff", borderRadius: 10,
        padding: 12, marginBottom: 12, gap: 8,
    },
    cardTitle: { fontSize: 15, fontWeight: "600", color: "#334155" },
    row: { flexDirection: "row", gap: 8, alignItems: "center" },
    label: { fontSize: 13, color: "#64748b", minWidth: 80 },
    value: { fontSize: 13, color: "#0f172a", fontWeight: "500" },
    input: {
        borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 8,
        paddingHorizontal: 10, paddingVertical: 6, fontSize: 14,
    },
    historyItem: { fontSize: 13, color: "#475569", marginTop: 2 },
});
