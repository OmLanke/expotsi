import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../store/counterSlice';
import { useTheme } from '../context/ThemeContext';

// useReducer setup for Simple Form
const formInitialState = {
    username: '',
    email: ''
};

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return formInitialState;
        default:
            return state;
    }
}

export default function Exp04Screen() {
    const { isDarkTheme, toggleTheme, colors } = useTheme();

    // Redux
    const count = useSelector((state) => state.counter.value);
    const actionHistory = useSelector((state) => state.counter.actionHistory);
    const dispatch = useDispatch();

    // useReducer
    const [formState, dispatchForm] = useReducer(formReducer, formInitialState);

    const handleFieldChange = (field, value) => {
        dispatchForm({ type: 'SET_FIELD', field, value });
    };

    const handleResetForm = () => {
        dispatchForm({ type: 'RESET' });
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.scrollContent}>

            {/* Context API (Theme) DEMO */}
            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Context API (Theme)</Text>
                <View style={styles.row}>
                    <Text style={[styles.text, { color: colors.text }]}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isDarkTheme ? '#4a90e2' : '#f4f3f4'}
                        onValueChange={toggleTheme}
                        value={isDarkTheme}
                    />
                </View>
            </View>

            {/* Redux Toolkit DEMO */}
            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>Redux Toolkit (Global Store)</Text>
                <Text style={[styles.counterText, { color: colors.text }]}>{count}</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={() => dispatch(decrement())}>
                        <Text style={styles.buttonText}>-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.danger }]} onPress={() => dispatch(reset())}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.success }]} onPress={() => dispatch(increment())}>
                        <Text style={styles.buttonText}>+1</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: colors.primary, marginTop: 12 }]}
                    onPress={() => dispatch(incrementByAmount(10))}
                >
                    <Text style={styles.buttonText}>Increment by 10</Text>
                </TouchableOpacity>

                {/* Action History Log */}
                <View style={[styles.historyBox, { borderColor: colors.neutral }]}>
                    <Text style={[styles.historyTitle, { color: colors.text }]}>Recent Actions Log:</Text>
                    {actionHistory.length === 0 ? (
                        <Text style={{ color: colors.neutral, fontStyle: 'italic' }}>No actions dispatched yet.</Text>
                    ) : (
                        actionHistory.map((act, index) => (
                            <Text key={index} style={[styles.historyItem, { color: colors.neutral }]}>
                                • {act}
                            </Text>
                        ))
                    )}
                </View>
            </View>

            {/* useReducer DEMO */}
            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.sectionLabel, { color: colors.neutral }]}>useReducer (Complex Component State)</Text>

                <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.neutral }]}
                    placeholder="Username"
                    placeholderTextColor={colors.neutral}
                    value={formState.username}
                    onChangeText={(value) => handleFieldChange('username', value)}
                />
                <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.neutral }]}
                    placeholder="Email"
                    placeholderTextColor={colors.neutral}
                    value={formState.email}
                    onChangeText={(value) => handleFieldChange('email', value)}
                    keyboardType="email-address"
                />

                <View style={styles.previewBox}>
                    <Text style={[styles.text, { color: colors.text, fontStyle: 'italic' }]}>
                        Preview: {formState.username || '...'} | {formState.email || '...'}
                    </Text>
                </View>

                <TouchableOpacity style={[styles.button, { backgroundColor: colors.danger, marginTop: 8 }]} onPress={handleResetForm}>
                    <Text style={styles.buttonText}>Clear Form State</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    sectionLabel: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    counterText: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 10,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    historyBox: {
        marginTop: 16,
        borderTopWidth: 1,
        paddingTop: 12,
    },
    historyTitle: {
        fontWeight: 'bold',
        marginBottom: 6,
    },
    historyItem: {
        fontSize: 14,
        marginBottom: 2,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },
    previewBox: {
        marginBottom: 12,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 8,
    }
});
