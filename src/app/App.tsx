import './App.css'
import {useState} from "react";
import {Counter} from "../common/Components/Counter.tsx";
import {ValueSettings} from "../common/Components/ValueSettings.tsx";
import {counterSelector} from "../features/model/counter/counter-selector.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {incrementAC, resetAC} from "../features/model/counter/counter-reducer.ts";
import {startValueSelector} from "../features/model/startValue/startValue-selector.ts";
import {maxValueSelector} from "../features/model/maxValue/maxValue-selector.ts";

export const App = () => {
    const [error, setError] = useState<boolean>(false)
    const [settingsFocused, setSettingsFocused] = useState<boolean>(false)


    // useEffect(() => {
    //     let countString = localStorage.getItem("countValue")
    //     let maxValueString = localStorage.getItem("maxValue")
    //     let startValueString = localStorage.getItem("startValue")
    //     if (countString) {
    //         setCount(JSON.parse(countString))
    //     }
    //     if(maxValueString){
    //         setMaxValue(JSON.parse(maxValueString))
    //         setTempMaxValue(JSON.parse(maxValueString))
    //     }
    //     if (startValueString){
    //         setStartValue(JSON.parse(startValueString))
    //         setTempStartValue(JSON.parse(startValueString))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('countValue', JSON.stringify(count))
    // }, [count])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue]);
    //
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue]);

    const count = useAppSelector(counterSelector);
    const startValue = useAppSelector(startValueSelector)
    const maxValue = useAppSelector(maxValueSelector)

    const dispatch = useAppDispatch();

    const increment = () => {if (count < maxValue) dispatch(incrementAC())}
    const reset = () => dispatch(resetAC(startValue))


    return (
        <div className="App">
            <ValueSettings
                setError={setError}
                setFocused={setSettingsFocused}
                error={error}
                focus={settingsFocused}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                startValue={startValue}
                increment={increment}
                reset={reset}
                error={error}
                focus={settingsFocused}
            />
        </div>
    )

}
