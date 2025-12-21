import {createAction, createReducer} from "@reduxjs/toolkit";

export const setMaxValueAC = createAction<number>('maxValue/setMaxValue')

const initialState = {
    value: 5
}

export const maxValueReducer = createReducer(initialState, (builder) => {
    builder.addCase(setMaxValueAC, (state, action) => {
        state.value = action.payload
    })
})