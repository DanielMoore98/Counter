import {Button} from "./Button.tsx";

type propsType = {
    count: number
    maxValue: number
    startValue: number
    increment: () => void
    reset: () => void
    error: boolean
    focus: boolean
}

export const Counter = ({count, maxValue, startValue, increment, reset, error, focus}: propsType) => {

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

