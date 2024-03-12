import React from "react";
import "./body.css";

const Body = () => {
  return (
    <div>
      <div className="container">
        <div className="steps">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <div className="count">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <div className="date">Date</div>
      </div>
    </div>
  );
};

export default Body;
