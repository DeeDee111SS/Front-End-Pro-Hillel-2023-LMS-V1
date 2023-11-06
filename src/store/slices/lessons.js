import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({
    name: 'lessons',
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

export const { increment, decrement, incrementByAmount } = lessonsSlice.actions;
// change the code above
export default lessonsSlice.reducer