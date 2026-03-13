import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Exp01Screen() {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.header, { backgroundColor: colors.primary }]}>
                <Text style={styles.headerText}>ADRN Lab - Exp 01</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.card, { backgroundColor: colors.card }]}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={[styles.name, { color: colors.text }]}>Anushrut</Text>
                        <Text style={[styles.department, { color: colors.neutral }]}>KJ Somaiya School of Engineering</Text>
                        <Text style={[styles.roll, { color: colors.text }]}>Roll No: 42</Text>
                    </View>
                </View>

                <View style={[styles.card, { backgroundColor: colors.card }]}>
                    <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Core Components Used</Text>
                    <Text style={[styles.listItem, { color: colors.text }]}>• View (Flexbox container)</Text>
                    <Text style={[styles.listItem, { color: colors.text }]}>• Text (Typography)</Text>
                    <Text style={[styles.listItem, { color: colors.text }]}>• Image (Profile picture)</Text>
                    <Text style={[styles.listItem, { color: colors.text }]}>• StyleSheet (Styling)</Text>
                    <Text style={[styles.listItem, { color: colors.text }]}>• ScrollView (Scrollable area)</Text>
                </View>
            </ScrollView>

            <View style={[styles.footer, { backgroundColor: colors.card }]}>
                <Text style={[styles.footerText, { color: colors.neutral }]}>Somaiya ADRN Lab © 2025-26</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollContent: {
        padding: 16,
    },
    card: {
        borderRadius: 12,
        elevation: 2,
        padding: 16,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 16,
    },
    profileInfo: {
        alignItems: 'center',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    department: {
        fontSize: 14,
        marginBottom: 4,
    },
    roll: {
        fontSize: 16,
        fontWeight: '500',
    },
    sectionLabel: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 6,
        lineHeight: 24,
    },
    footer: {
        padding: 16,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
    footerText: {
        fontSize: 12,
    },
});
