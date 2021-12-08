import React from "react";

function Controls(props) {
  const { controls, dispatchLightProps } = props;

  const handleClick = (level) => {
    dispatchLightProps({ type: "CHANGE_LEVEL", payload: { level: level } });
  };

  const lightButtons = controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d.name)}>
        {d.name}
      </button>
    );
  });

  return (
    <>
      <div className="controls">{lightButtons}</div>
    </>
  );
}

export default Controls;
