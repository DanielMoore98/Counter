import {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";

type PropsType = {
    error: boolean
    setFocused: Dispatch<SetStateAction<boolean>>
    setError: Dispatch<SetStateAction<boolean>>
    setDisabled: Dispatch<SetStateAction<boolean>>
    tempMaxValue: number
    tempStartValue: number
    setTempMaxValue: Dispatch<SetStateAction<number>>
    setTempStartValue: Dispatch<SetStateAction<number>>
}

export const Inputs = ({
                           error,
                           setFocused,
                           setError,
                           setDisabled,
                           setTempMaxValue,
                           setTempStartValue,
                           tempStartValue,
                           tempMaxValue
                       }: PropsType) => {

    const displayMaxValue = Number(localStorage.getItem("maxValue"))
    const displayStartValue = Number(localStorage.getItem("startValue"))


    useEffect(() => {
        if (tempMaxValue < tempStartValue || tempStartValue < 0 || tempMaxValue === tempStartValue) {
            setError(true);
            setDisabled(true);
        } else {
            setError(false);
            setDisabled(false);
        }
    }, [tempMaxValue, tempStartValue])

    const setCountMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTempMaxValue(JSON.parse(e.currentTarget.value))
    }

    const setCountStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTempStartValue(JSON.parse(e.currentTarget.value))
    }

    const setEnabledHandler = () => {
        if (!error) {
            setDisabled(false)
        }
        setFocused(true)
    }

    return (
            <div className="input-wrapper">
                <div className={"input-line"}>
                    <label htmlFor={"1"}>Max value:</label>
                    <input id={"1"}
                           className={(tempMaxValue === tempStartValue) || (tempMaxValue <= 0)
                           && error ? "input-error" : "input"}
                           defaultValue={displayMaxValue}
                           type={"number"}
                           onChange={setCountMaxValueHandler}
                           onFocus={setEnabledHandler}
                    />
                </div>
                <div className={"input-line"}>
                    <label htmlFor={"2"}>Start value:</label>
                    <input id={"2"}
                           className={error ? "input-error" : "input"}
                           defaultValue={displayStartValue}
                           type={"number"}
                           onChange={setCountStartValueHandler}
                           onFocus={setEnabledHandler}
                    />
                </div>
            </div>
    );
};

