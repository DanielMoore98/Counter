import {RootState} from "../../../app/store.ts";

export const maxValueSelector = (state: RootState): number => state.maxValue.value;