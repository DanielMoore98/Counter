import {Button} from "./Button.tsx";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {incrementValueAC, setValueAC} from "../../features/model/counter/counter-reducer.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {
    errorSelector, maxValueSelector,
    settingFocusedSelector,
    startValueSelector,
    valueSelector
} from "../../features/model/counter/selectors.ts";



export const Counter = () => {
    const error: boolean = useAppSelector(errorSelector)
    const focus: boolean = useAppSelector(settingFocusedSelector)
    const dispatch = useAppDispatch();
    const count: number = useAppSelector(valueSelector);
    const startValue: number = useAppSelector(startValueSelector)
    const maxValue: number = useAppSelector(maxValueSelector)

    const increment = () => {
        if (count < maxValue) dispatch(incrementValueAC())
    }
    const reset = () => dispatch(setValueAC(startValue))
    return (
        <div className={"whole-counter"}>
            <div className={"numbers"}>
                {error && <p style={{color: "red"}}>Incorrect Value !</p>}
                {focus && !error && <p style={{color: "#1fd8d8"}}>Enter values and press 'Set'</p>}
                {!error && !focus
                    && <h1 style={count === maxValue ? {color: "red"} : {color: "#1fd8d8"}}>{count}</h1>}
            </div>
            <div className={"button-wrapper"}>
                <Button name="inc" onClick={increment} disabled={count === maxValue || focus}></Button>
                <Button name="reset" onClick={reset} disabled={count === startValue || focus}></Button>
            </div>
        </div>
    );
};

