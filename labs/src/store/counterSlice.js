import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    actionHistory: []
};

const logAction = (state, actionName) => {
    state.actionHistory.unshift(actionName);
    if (state.actionHistory.length > 5) {
        state.actionHistory.pop();
    }
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            logAction(state, 'INCREMENT');
        },
        decrement: (state) => {
            state.value -= 1;
            logAction(state, 'DECREMENT');
        },
        reset: (state) => {
            state.value = 0;
            logAction(state, 'RESET');
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
            logAction(state, `INCREMENT_BY_${action.payload}`);
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
