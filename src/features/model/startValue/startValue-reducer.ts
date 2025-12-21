import {createAction, createReducer} from "@reduxjs/toolkit";

export const setStartValueAC = createAction<number>('startValue/setValue')

const initialState = {
    value: 0,
}

export const startValueReducer  = createReducer(initialState, (builder) => {
    builder.addCase(setStartValueAC, (state, action) => {
        state.value = action.payload
    })
})