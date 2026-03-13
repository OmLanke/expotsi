// =============================================================
// FETCH API
// =============================================================
//
// DEFINITION:
// Fetch API performs HTTP requests to retrieve or send data in
// React Native apps. It is commonly used with JSON APIs and
// async/await.
//
// ADVANTAGES:
// - Native promise-based API with simple syntax.
// - Works well for REST API integration.
// - Flexible for headers, methods, and payloads.
//
// DISADVANTAGES:
// - Requires manual error handling for non-2xx responses.
// - No built-in request cancellation in basic usage.
// - Repeated request logic can become duplicated.
// =============================================================

import React, { useCallback, useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from "react-native";

async function requestJson(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

export default function FetchApiDemo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [todoId, setTodoId] = useState("1");
    const [singleTodo, setSingleTodo] = useState(null);
    const [newTitle, setNewTitle] = useState("Learn Fetch in Expo");
    const [createdTodo, setCreatedTodo] = useState(null);

    const loadTodos = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const data = await requestJson("https://jsonplaceholder.typicode.com/todos?_limit=5");
            setTodos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    const getTodoById = async () => {
        const id = Number(todoId);
        if (!id || id < 1) return setError("Please enter a valid numeric ID.");

        setLoading(true);
        setError("");
        setSingleTodo(null);
        try {
            const data = await requestJson(`https://jsonplaceholder.typicode.com/todos/${id}`);
            setSingleTodo(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createTodo = async () => {
        if (!newTitle.trim()) return setError("Todo title cannot be empty.");

        setLoading(true);
        setError("");
        setCreatedTodo(null);
        try {
            const data = await requestJson("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle.trim(), completed: false, userId: 1 }),
            });
            setCreatedTodo(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fetch API Demo</Text>

            {loading && <ActivityIndicator style={styles.loader} color="#0ea5e9" />}
            {!!error && <Text style={styles.error}>✗ {error}</Text>}

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>GET: Todo List</Text>
                <Button title="Reload Todos" onPress={loadTodos} />
                <FlatList
                    data={todos}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>• {item.title}</Text>
                    )}
                    scrollEnabled={false}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>GET: Todo by ID</Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        value={todoId}
                        onChangeText={setTodoId}
                        keyboardType="number-pad"
                        placeholder="Enter ID"
                    />
                    <Button title="Fetch" onPress={getTodoById} />
                </View>
                {singleTodo && (
                    <Text style={styles.result}>[{singleTodo.id}] {singleTodo.title}</Text>
                )}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>POST: Create Todo</Text>
                <TextInput
                    style={styles.input}
                    value={newTitle}
                    onChangeText={setNewTitle}
                    placeholder="New todo title"
                />
                <Button title="Create" onPress={createTodo} />
                {createdTodo && (
                    <Text style={styles.result}>Created #{createdTodo.id}: {createdTodo.title}</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 10 },
    loader: { marginBottom: 8 },
    error: { color: "#dc2626", marginBottom: 8 },
    section: { backgroundColor: "white", borderRadius: 10, padding: 12, marginBottom: 12, gap: 8 },
    sectionTitle: { fontSize: 15, fontWeight: "600", color: "#1e293b" },
    item: { fontSize: 13, color: "#334155" },
    row: { flexDirection: "row", alignItems: "center", gap: 8 },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
        flex: 1,
    },
    result: { fontSize: 13, color: "#0f172a" },
});
