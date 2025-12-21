import {Button} from "./Button.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import {Inputs} from "./Inputs.tsx";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {startValueSelector} from "../../features/model/startValue/startValue-selector.ts";
import {resetAC} from "../../features/model/counter/counter-reducer.ts";

type PropsType = {
    setError: Dispatch<SetStateAction<boolean>>
    setFocused: Dispatch<SetStateAction<boolean>>
    error: boolean
    focus: boolean
}


export const ValueSettings = ({
                                  setError,
                                  setFocused,
                                  error,
                                  focus,
                              }: PropsType) => {

    const [disabled, setDisabled] = useState<boolean>(true);
    const dispatch = useDispatch();
    const startValue = useAppSelector(startValueSelector)

    const setValuesHandler = () => {
        dispatch(resetAC(startValue))
        setDisabled(true)
        setFocused(false)
    }

    return (
        <div className="settings">
            <Inputs error={error}
                    setError={setError}
                    setFocused={setFocused}
                    setDisabled={setDisabled}
            />
            <div className={"button-wrapper"}>
                <Button name={"set"} onClick={setValuesHandler} disabled={disabled || !focus}/>
            </div>
        </div>
    );
};

