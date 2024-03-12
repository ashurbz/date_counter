import React, { useState } from "react";
import "./body.css";

const Body = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleMinusStep = () => {
    setStep(step - 1);
  };
  const handlePlusStep = () => {
    setStep(step + 1);
  };

  const handleMinusCount = () => {
    setCount(count - step);
  };
  const handlePlusCount = () => {
    setCount(count + step);
  };

  return (
    <div>
      <div className="container">
        <div className="steps">
          <button onClick={handleMinusStep}>-</button>
          <span>{step}</span>
          <button onClick={handlePlusStep}>+</button>
        </div>
        <div className="count">
          <button onClick={handleMinusCount}>-</button>
          <span>{count}</span>
          <button onClick={handlePlusCount}>+</button>
        </div>
        <div className="date">Date</div>
      </div>
    </div>
  );
};

export default Body;
