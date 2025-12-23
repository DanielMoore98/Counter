import {RootState} from "../../../app/store.ts";

export const disabledSelector = (state: RootState): boolean => state.counter.disabled;
export const errorSelector = (state: RootState): boolean => state.counter.error;
export const maxValueSelector = (state: RootState): number => state.counter.maxValue;
export const settingFocusedSelector = (state: RootState): boolean => state.counter.settingFocused;
export const startValueSelector = (state: RootState): number => state.counter.startValue;
export const valueSelector = (state: RootState): number => state.counter.value;