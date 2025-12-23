import './App.css'
import {Counter} from "../common/Components/Counter.tsx";
import {ValueSettings} from "../common/Components/ValueSettings.tsx";

export const App = () => {

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

    return (
        <div className="App">
            <ValueSettings/>
            <Counter/>
        </div>
    )

}
