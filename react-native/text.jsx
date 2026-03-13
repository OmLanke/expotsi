// =============================================================
// TEXT
// =============================================================
//
// DEFINITION:
// Text displays readable content in React Native and is required
// for rendering strings on screen. It supports nesting and
// text-specific styling.
//
// ADVANTAGES:
// - Simple API for labels and messages.
// - Supports typography styles like size and weight.
// - Allows nested text for inline formatting.
//
// DISADVANTAGES:
// - Styling can vary slightly across platforms.
// - Long text requires careful wrapping/truncation.
// - Accessibility labels may be needed for clarity.
// =============================================================

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LONG_TEXT =
    "React Native Text supports multiline rendering, styling, and nested formatting for rich in-app reading content.";

export default function TextDemo() {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Text Demo</Text>

            <View style={styles.card}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.subtitle}>Welcome to your Expo app.</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Nested Text Formatting</Text>
                <Text style={styles.paragraph}>
                    This sentence includes <Text style={styles.bold}>bold</Text>,
                    <Text style={styles.italic}> italic</Text>, and
                    <Text style={styles.code}> code-like text</Text> styles.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Truncation / Expand</Text>
                <Text style={styles.paragraph} numberOfLines={expanded ? 0 : 2}>
                    {LONG_TEXT.repeat(3)}
                </Text>
                <Button title={expanded ? "Show Less" : "Show More"} onPress={() => setExpanded((v) => !v)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    heading: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    title: { fontSize: 20, fontWeight: "600", color: "#1e293b" },
    subtitle: { fontSize: 14, color: "#64748b" },
    label: { fontSize: 15, fontWeight: "700", color: "#1e293b" },
    paragraph: { fontSize: 14, color: "#334155", lineHeight: 20 },
    bold: { fontWeight: "700" },
    italic: { fontStyle: "italic" },
    code: { backgroundColor: "#e2e8f0", color: "#0f172a" },
});
