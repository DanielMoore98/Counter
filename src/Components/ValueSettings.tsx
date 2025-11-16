import {Button} from "./Button.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import {Inputs} from "./Inputs.tsx";

type PropsType = {
    setValues: (start: number, max: number) => void
    setError: Dispatch<SetStateAction<boolean>>
    setFocused: Dispatch<SetStateAction<boolean>>
    error: boolean
    focus: boolean
    tempStartValue: number
    tempMaxValue: number
    setTempStartValue: Dispatch<SetStateAction<number>>
    setTempMaxValue: Dispatch<SetStateAction<number>>
}


export const ValueSettings = ({
                                  setValues,
                                  setError,
                                  setFocused,
                                  error,
                                  focus,
                                  setTempMaxValue,
                                  setTempStartValue,
                                  tempStartValue,
                                  tempMaxValue
                              }: PropsType) => {

    const [disabled, setDisabled] = useState<boolean>(true);

    const setValuesHandler = () => {
        setValues(tempStartValue, tempMaxValue)
        setDisabled(true)
        setFocused(false)
    }

    return (
        <div className="settings">
            <Inputs error={error}
                    setError={setError}
                    setFocused={setFocused}
                    setDisabled={setDisabled}
                    tempStartValue={tempStartValue}
                    tempMaxValue={tempMaxValue}
                    setTempMaxValue={setTempMaxValue}
                    setTempStartValue={setTempStartValue}
            />
            <div className={"button-wrapper"}>
                <Button name={"set"} onClick={setValuesHandler} disabled={disabled || !focus}/>
            </div>
        </div>
    );
};

