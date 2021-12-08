import React, { useReducer } from "react";
import Controls from "./components/Controls";
import Light from "./components/Lights";
import lightData from "./data/lightData";

const lightPropsReducer = (lightProps, action) => {
  switch (action.type) {
    case "RESET":
      return { ...lightProps, color: "rgba(0,0,0,1)", count: 0 };
    case "CHANGE_LEVEL":
      let getLevel = lightProps.lightData.find(
        (lightLevel) => lightLevel.name === action.payload.level
      );
      return {
        ...lightProps,
        color: getLevel.color,
        count: lightProps.count + 1,
      };
    default:
      return lightProps;
  }
};

function App() {
  const initialState = {
    lightData: lightData,
    color: "rgba(0,0,0,1)",
    count: 0,
  };

  const [lightProps, dispatchLightProps] = useReducer(
    lightPropsReducer,
    initialState
  );

  return (
    <div className="App">
      <Controls
        controls={lightProps.lightData}
        dispatchLightProps={dispatchLightProps}
      />
      <p>Number of clicks: {lightProps.count}</p>
      <button onClick={() => dispatchLightProps({ type: "RESET" })}>
        Reset
      </button>
      <Light color={lightProps.color} />
    </div>
  );
}

export default App;
