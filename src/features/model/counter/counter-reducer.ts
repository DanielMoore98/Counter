import {createAction, createReducer} from '@reduxjs/toolkit';

export const incrementAC = createAction('counter/increment');
export const resetAC = createAction<number>('counter/reset')

const initialState = {
    value: 0,
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAC, (state) => {
            state.value = state.value + 1
        })
        .addCase(resetAC, (state, action) => {
            state.value = action.payload
        })

})