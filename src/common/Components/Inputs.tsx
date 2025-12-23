import {ChangeEvent, useEffect} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {
    setDisabledAC,
    setErrorAC,
    setMaxValueAC,
    setSettingFocusAC, setStartValueAC
} from "../../features/model/counter/counter-reducer.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {errorSelector, maxValueSelector, startValueSelector} from "../../features/model/counter/selectors.ts";



export const Inputs = () => {
    const maxValue = useAppSelector(maxValueSelector)
    const startValue = useAppSelector(startValueSelector)
    const error: boolean = useAppSelector(errorSelector);
    const dispatch = useAppDispatch();

    //useEffect used to prevent 'Cannot update a component (`ValueSettings`)
    //while rendering a different component (`Inputs`)' error
    //i.e it stops this component from updating its parent component before its (child component) done rendering
    //(useEffect code is executed after component is rendered)
    useEffect(() => {
        if (maxValue < startValue || startValue < 0 || maxValue === startValue) {
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        } else {
            dispatch(setErrorAC(false))
            dispatch(setDisabledAC(false))
        }
    }, [maxValue,startValue])


    const setCountMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
         dispatch(setMaxValueAC(JSON.parse(e.currentTarget.value)))
    }

    const setCountStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
         dispatch(setStartValueAC(JSON.parse(e.currentTarget.value)))
    }

    const setEnabledHandler = () => {
        if (!error) dispatch(setDisabledAC(false))
        dispatch(setSettingFocusAC(true))
    }

    const maxClassName = (maxValue === startValue) || (maxValue <= 0)
    && error ? "input-error" : "input"
    const startClassName = error ? "input-error" : "input"

    return (
            <div className="input-wrapper">
                <div className={"input-line"}>
                    <label htmlFor={"1"}>Max value:</label>
                    <input id={"1"}
                           className={maxClassName}
                           defaultValue={maxValue}
                           type={"number"}
                           onChange={setCountMaxValueHandler}
                           onFocus={setEnabledHandler}
                    />
                </div>
                <div className={"input-line"}>
                    <label htmlFor={"2"}>Start value:</label>
                    <input id={"2"}
                           className={startClassName}
                           defaultValue={startValue}
                           type={"number"}
                           onChange={setCountStartValueHandler}
                           onFocus={setEnabledHandler}
                    />
                </div>
            </div>
    );
};

