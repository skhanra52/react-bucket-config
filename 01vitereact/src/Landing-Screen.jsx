import React, { useState } from "react";

function Landing() {
    let [counter, setCounter] = useState(0);
    function increaseCounter() {
        if(counter >=0 && counter <10) setCounter(counter + 1);
    }
    function decreaseCounter(){
        if(counter>0) setCounter(counter - 1);
    }
    function resetCounter(){
        setCounter(0);
    }
return (
    <>
        <p>This is the landing screen</p>
        <h2>Counter:{counter}</h2>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
        <button onClick={resetCounter}>Reset</button>
    </>
)
}

export default Landing;