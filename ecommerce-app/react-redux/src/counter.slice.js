import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(state.value);
            return {
                value: state.value + 1
            }
        },
        decrement: (state, action) => {
            return {
                value: state.value - 1
            }
        },
        reset: (state, action) => {
            return {
                value: 0
            };
        }
    }
});

// Generated actions
export const { increment, decrement, reset } = counterSlice.actions;

// Generated reducer
export default counterSlice.reducer;