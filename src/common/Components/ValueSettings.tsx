import {Button} from "./Button.tsx";
import {Inputs} from "./Inputs.tsx";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {setDisabledAC, setSettingFocusAC, setValueAC} from "../../features/model/counter/counter-reducer.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {disabledSelector, settingFocusedSelector, startValueSelector} from "../../features/model/counter/selectors.ts";


export const ValueSettings = () => {

    const disabled: boolean = useAppSelector(disabledSelector)
    const startValue: number = useAppSelector(startValueSelector)
    const focus: boolean = useAppSelector(settingFocusedSelector)
    const dispatch = useAppDispatch();

    const setValuesHandler = () => {
        dispatch(setValueAC(startValue))
        dispatch(setDisabledAC(true))
        dispatch(setSettingFocusAC(false))
    }

    return (
        <div className="settings">
            <Inputs/>
            <div className={"button-wrapper"}>
                <Button name={"set"} onClick={setValuesHandler} disabled={disabled || !focus}/>
            </div>
        </div>
    );
};

