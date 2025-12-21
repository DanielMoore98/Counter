import {RootState} from "../../../app/store.ts";

export const startValueSelector = (state: RootState): number => state.startValue.value;