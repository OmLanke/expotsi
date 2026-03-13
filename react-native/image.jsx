// =============================================================
// IMAGE
// =============================================================
//
// DEFINITION:
// Image renders local or remote images in React Native apps.
// It supports sizing, resize modes, and caching behavior.
//
// ADVANTAGES:
// - Easy display of assets and remote media.
// - Supports multiple resize strategies.
// - Integrates with style props for layout control.
//
// DISADVANTAGES:
// - Remote images may load slowly on weak networks.
// - Incorrect dimensions can distort visuals.
// - Requires optimization to avoid memory pressure.
// =============================================================

import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const URLS = [
    "https://picsum.photos/seed/expo1/400/240",
    "https://picsum.photos/seed/expo2/400/240",
    "https://picsum.photos/seed/expo3/400/240",
];

export default function ImageDemo() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % URLS.length);
    const prev = () => setIndex((i) => (i - 1 + URLS.length) % URLS.length);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Image Demo</Text>

            <View style={styles.card}>
                <Image source={{ uri: URLS[index] }} style={styles.hero} resizeMode="cover" />
                <Text style={styles.caption}>Remote image {index + 1} of {URLS.length}</Text>

                <View style={styles.row}>
                    <Pressable style={styles.btn} onPress={prev}><Text style={styles.btnText}>Prev</Text></Pressable>
                    <Pressable style={styles.btn} onPress={next}><Text style={styles.btnText}>Next</Text></Pressable>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.caption}>Different resizeMode previews</Text>
                <View style={styles.previewRow}>
                    <Image source={{ uri: URLS[0] }} style={styles.thumb} resizeMode="cover" />
                    <Image source={{ uri: URLS[0] }} style={styles.thumb} resizeMode="contain" />
                    <Image source={{ uri: URLS[0] }} style={styles.thumb} resizeMode="stretch" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f8fafc", gap: 10 },
    title: { fontSize: 22, fontWeight: "700", color: "#0f172a" },
    card: { backgroundColor: "white", borderRadius: 10, padding: 12, gap: 8 },
    hero: { width: "100%", height: 200, borderRadius: 10, backgroundColor: "#e2e8f0" },
    caption: { fontSize: 13, color: "#475569" },
    row: { flexDirection: "row", gap: 8 },
    btn: { flex: 1, backgroundColor: "#e2e8f0", borderRadius: 8, paddingVertical: 10, alignItems: "center" },
    btnText: { fontSize: 13, fontWeight: "700", color: "#334155" },
    previewRow: { flexDirection: "row", gap: 8 },
    thumb: { flex: 1, height: 80, borderRadius: 8, backgroundColor: "#e2e8f0" },
});
