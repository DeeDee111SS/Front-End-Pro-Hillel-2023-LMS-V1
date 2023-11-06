import { createSlice } from '@reduxjs/toolkit';

export const artSlice = createSlice({
    name: 'articles',
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

export const { increment, decrement, incrementByAmount } = artSlice.actions;
// change the code above
export default artSlice.reducer