import React from "react";
import Controls from "./components/Controls";
import Light from "./components/Light";
import lightData from "./data/lightData";
console.log("lightData", lightData);

function App() {
  const controls = ["off", "low", "medium", "high"];

  return (
    <div className="App">
      <Controls controls={controls} />
      <Light />
    </div>
  );
}

export default App;
