import { createSlice } from '@reduxjs/toolkit';

export const hwSlice = createSlice({
    name: 'homeworks',
    initialState: { // change the code below
        value: 10
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, {payload}) => {
            state.value += payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = hwSlice.actions;
// change the code above
export default hwSlice.reducer