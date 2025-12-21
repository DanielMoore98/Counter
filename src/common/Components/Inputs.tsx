import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {setStartValueAC} from "../../features/model/startValue/startValue-reducer.ts";
import {setMaxValueAC} from "../../features/model/maxValue/maxValue-reducer.ts";

type PropsType = {
    error: boolean
    setFocused: Dispatch<SetStateAction<boolean>>
    setError: Dispatch<SetStateAction<boolean>>
    setDisabled: Dispatch<SetStateAction<boolean>>

}


export const Inputs = ({
                           error,
                           setFocused,
                           setError,
                           setDisabled,
                       }: PropsType) => {


    const [tempMaxValue, setTempMaxValue] = useState<number>(5);
    const [tempStartValue, setTempStartValue] = useState<number>(0);

    const dispatch = useAppDispatch();


    if (tempMaxValue < tempStartValue || tempStartValue < 0 || tempMaxValue === tempStartValue) {
        setError(true);
        setDisabled(true);
    } else {
        setError(false);
        setDisabled(false);
    }

    const setCountMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTempMaxValue(JSON.parse(e.currentTarget.value))
        dispatch(setMaxValueAC(JSON.parse(e.currentTarget.value)))
    }

    const setCountStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTempStartValue(JSON.parse(e.currentTarget.value))
        dispatch(setStartValueAC(JSON.parse(e.currentTarget.value)))
    }

    const setEnabledHandler = () => {
        if (!error) setDisabled(false)
        setFocused(true)
    }

    const className = (tempMaxValue === tempStartValue) || (tempMaxValue <= 0)
    && error ? "input-error" : "input"

    return (
            <div className="input-wrapper">
                <div className={"input-line"}>
                    <label htmlFor={"1"}>Max value:</label>
                    <input id={"1"}
                           className={className}
                           defaultValue={tempMaxValue}
                           type={"number"}
                           onChange={setCountMaxValueHandler}
                           onFocus={setEnabledHandler}
                    />
                </div>
                <div className={"input-line"}>
                    <label htmlFor={"2"}>Start value:</label>
                    <input id={"2"}
                           className={error ? "input-error" : "input"}
                           defaultValue={tempStartValue}
                           type={"number"}
                           onChange={setCountStartValueHandler}
                           onFocus={setEnabledHandler}
                    />
                </div>
            </div>
    );
};

