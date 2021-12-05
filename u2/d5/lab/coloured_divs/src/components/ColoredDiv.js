// IMPORT useEffect
import React, { useState, useEffect } from "react";

const ColoredDiv = (props) => {
  const [width, setWidth] = useState(0);

  // SETUP useEffect
  // useEffect(() => {
  //   console.log("ComponentDidMount-coloredDiv");
  // }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  let styles = {
    background: props.color,
    // add conditional logic here
  };

  return (
    <>
      <div style={styles} className="colored-div">
        {props.color}
        <button>Remove</button>
      </div>
    </>
  );
};

export default ColoredDiv;
