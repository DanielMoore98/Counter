import {createAction, createReducer} from '@reduxjs/toolkit';

export const incrementValueAC = createAction('counter/increment');
export const setValueAC = createAction<number>('counter/reset')
export const setErrorAC = createAction<boolean>('counter/setError');
export const setSettingFocusAC = createAction<boolean>('counter/setSettingFocus');
export const setDisabledAC = createAction<boolean>('counter/setDisabled');
export const setStartValueAC = createAction<number>('counter/setStartValue');
export const setMaxValueAC = createAction<number>('counter/setMaxValue');

const initialState = {
    value: 0,
    error: false,
    settingFocused: false,
    disabled: true,
    startValue: 0,
    maxValue: 5,
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementValueAC, (state) => {
            state.value = state.value + 1
        })
        .addCase(setValueAC, (state, action) => {
            state.value = action.payload
        })
        .addCase(setErrorAC, (state, action) => {
            state.error = action.payload
        })
        .addCase(setSettingFocusAC, (state, action) => {
            state.settingFocused = action.payload
        })
        .addCase(setDisabledAC, (state, action) => {
            state.disabled = action.payload
        })
        .addCase(setStartValueAC, (state, action) => {
            state.startValue = action.payload
        })
        .addCase(setMaxValueAC, (state, action) => {
            state.maxValue = action.payload
        })

})