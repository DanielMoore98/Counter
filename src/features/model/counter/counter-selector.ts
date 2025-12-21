import {RootState} from "../../../app/store.ts";

export const counterSelector = (state: RootState): number => state.counter.value;