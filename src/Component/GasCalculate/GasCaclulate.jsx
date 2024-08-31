
import React, { useState, useEffect, useRef } from 'react';

const GasCalulate = () => {
  const [finalResultMilage, setFinalResultMilage] = useState('');

  const inputstartRef = useRef(null);
  const inputendtRef = useRef(null);
  const inputtankcapRef = useRef(null);
  const inputlasttimefuelRef = useRef(null);

  const handleSubmit = () => {
    const inputStartValue = inputstartRef.current.value;
    const inputEndValue = inputendtRef.current.value;
    
    const inputLastTimeValue = inputlasttimefuelRef.current.value;
    const resultMilage = parseInt(inputEndValue) - parseInt(inputStartValue);
    const FuelConsumtion = parseInt(resultMilage) / parseInt(inputLastTimeValue);
    setFinalResultMilage(FuelConsumtion);
  };


  return <div>
    <label>
      Start Milage
    </label>
    <input type='number' ref={inputstartRef}></input>
    <label>
      End Milage
    </label>
    <input type='number' ref={inputendtRef}></input>

    <label>Last time fuel</label>
    <input type='number' ref={inputlasttimefuelRef}></input>

    <button onClick={handleSubmit}>Submit</button>

    <h1>{finalResultMilage}</h1>
  </div>;
};

export default GasCalulate;