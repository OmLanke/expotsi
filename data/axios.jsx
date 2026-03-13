// =============================================================
// AXIOS
// =============================================================
//
// DEFINITION:
// Axios is a promise-based HTTP client used to send API
// requests with simpler defaults for JSON, headers, and
// interceptors. It is commonly chosen when apps need reusable
// request configuration and centralized error handling.
//
// ADVANTAGES:
// - Cleaner request and response handling than raw network code.
// - Supports interceptors for auth tokens, logging, and retries.
// - Automatically parses JSON responses.
//
// DISADVANTAGES:
// - Adds an external dependency for something fetch can do.
// - Bundle size increases slightly.
// - Can be unnecessary for small projects with simple requests.
// =============================================================

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    TextInput,
} from "react-native";
import axios from "axios";

// --- Axios instance with default base URL and headers ---
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

// --- Request interceptor: attach auth token ---
api.interceptors.request.use((config) => {
    // In a real app: config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// --- Response interceptor: handle errors globally ---
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.warn("Global Axios error:", error.message);
        return Promise.reject(error);
    }
);

// --- Sub-component: render a single todo item ---
function TodoItem({ item }) {
    return (
        <View style={[styles.todoRow, item.completed && styles.todoCompleted]}>
            <Text style={styles.todoCheck}>{item.completed ? "✓" : "○"}</Text>
            <Text style={styles.todoTitle} numberOfLines={1}>{item.title}</Text>
        </View>
    );
}

export default function AxiosDemo() {
    const [todos, setTodos] = useState([]);
    const [singleTodo, setSingleTodo] = useState(null);
    const [postResult, setPostResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inputId, setInputId] = useState("1");

    // --- GET: fetch a list of todos on mount ---
    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            try {
                const response = await api.get("/todos?_limit=6");
                setTodos(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    // --- GET: fetch a single todo by ID ---
    const fetchById = async () => {
        const id = parseInt(inputId, 10);
        if (!id || id < 1 || id > 200) return setError("Enter a valid ID (1–200)");
        setError(null);
        setSingleTodo(null);
        setLoading(true);
        try {
            const response = await api.get(`/todos/${id}`);
            setSingleTodo(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // --- POST: create a new todo ---
    const createTodo = async () => {
        setError(null);
        setPostResult(null);
        setLoading(true);
        try {
            const response = await api.post("/todos", {
                title: "New Expo task",
                completed: false,
                userId: 1,
            });
            setPostResult(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Axios Demo</Text>

            {loading && <ActivityIndicator color="#6366f1" style={styles.spinner} />}
            {error && <Text style={styles.error}>✗ {error}</Text>}

            {/* GET list */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>GET /todos (list, limit 6)</Text>
                <FlatList
                    data={todos}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <TodoItem item={item} />}
                    scrollEnabled={false}
                />
            </View>

            {/* GET by ID */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>GET /todos/:id</Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        value={inputId}
                        onChangeText={setInputId}
                        keyboardType="numeric"
                        placeholder="Todo ID"
                    />
                    <Button title="Fetch" onPress={fetchById} />
                </View>
                {singleTodo && (
                    <Text style={styles.result}>
                        [{singleTodo.id}] {singleTodo.title} — {singleTodo.completed ? "Done" : "Pending"}
                    </Text>
                )}
            </View>

            {/* POST */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>POST /todos (create)</Text>
                <Button title="Create Todo" onPress={createTodo} />
                {postResult && (
                    <Text style={styles.result}>
                        Created ID: {postResult.id} — "{postResult.title}"
                    </Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f8fafc" },
    title: { fontSize: 22, fontWeight: "700", marginBottom: 12, color: "#1e293b" },
    spinner: { marginVertical: 8 },
    error: { color: "#dc2626", fontSize: 13, marginBottom: 8 },
    section: { marginTop: 16, padding: 12, backgroundColor: "#fff", borderRadius: 10, gap: 8 },
    sectionTitle: { fontSize: 15, fontWeight: "600", color: "#334155" },
    todoRow: { flexDirection: "row", alignItems: "center", paddingVertical: 4, gap: 8 },
    todoCompleted: { opacity: 0.5 },
    todoCheck: { fontSize: 14, color: "#6366f1", width: 18 },
    todoTitle: { fontSize: 13, color: "#374151", flex: 1 },
    row: { flexDirection: "row", alignItems: "center", gap: 8 },
    input: {
        flex: 1, borderWidth: 1, borderColor: "#cbd5e1",
        borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6,
        fontSize: 14, color: "#0f172a",
    },
    result: { fontSize: 13, color: "#0f172a", marginTop: 6 },
});
