import React, { useState, useEffect } from "react";
import "./styles.css";
import ColoredDiv from "./components/ColoredDiv";

function App() {
  const [colors, setColors] = useState(["lightgreen", "pink", "lightblue"]);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    console.log("ComponentDidMount");
  }, []);

  const colorsArr = colors.map((d, i) => {
    return <ColoredDiv color={d} key={i} index={i} />;
  });
  return (
    <div className="App">
      <h1>Current Window Width: {width}</h1>
      <div className="colored-divs">{colorsArr}</div>
      <button>Add New Color</button>
    </div>
  );
}

export default App;
