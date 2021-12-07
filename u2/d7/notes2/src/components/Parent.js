import React, { useState, useReducer } from "react";

const countReducer = (countState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: countState.count + 1 };
    case "DECREASE":
      return { count: countState.count - 1 };
    default:
      return countState;
  }
};

const Parent = () => {
  // const [count, setCount] = useState(0);
  const [countState, dispatchCountState] = useReducer(countReducer, {
    count: 0,
  });

  const increase = () => {
    dispatchCountState({ type: "INCREASE" });
  };

  const decrease = () => {
    dispatchCountState({ type: "DECREASE" });
  };

  return (
    <>
      <h1 className="centered">{countState.count}</h1>
      <div className="centered">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </>
  );
};

export default Parent;
