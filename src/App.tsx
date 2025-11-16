import './App.css'
import {useEffect, useState} from "react";
import {Counter} from "./Components/Counter.tsx";
import {ValueSettings} from "./Components/ValueSettings.tsx";

export const App = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [focused, setFocused] = useState<boolean>(false)
    const [tempMaxValue, setTempMaxValue] = useState<number>(0);
    const [tempStartValue, setTempStartValue] = useState<number>(0);

    useEffect(() => {
        let countString = localStorage.getItem("countValue")
        let maxValueString = localStorage.getItem("maxValue")
        let startValueString = localStorage.getItem("startValue")
        if (countString) {
            setCount(JSON.parse(countString))
        }
        if(maxValueString){
            setMaxValue(JSON.parse(maxValueString))
            setTempMaxValue(JSON.parse(maxValueString))
        }
        if (startValueString){
            setStartValue(JSON.parse(startValueString))
            setTempStartValue(JSON.parse(startValueString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue]);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue]);

    const increment = () => count < maxValue ? setCount(count => count + 1) : null
    const reset = () => setCount(startValue)


    const setValues = (start: number, max: number) => {
        setMaxValue(max)
        setStartValue(start)
        setCount(start)
    }

    return (
        <div className="App">
            <ValueSettings
                setValues={setValues}
                setError={setError}
                setFocused={setFocused}
                error={error}
                focus={focused}
                setTempMaxValue={setTempMaxValue}
                setTempStartValue={setTempStartValue}
                tempMaxValue={tempMaxValue}
                tempStartValue={tempStartValue}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                startValue={startValue}
                increment={increment}
                reset={reset}
                error={error}
                focus={focused}
            />
        </div>
    )

}
