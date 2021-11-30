import React from "react";

const Bulb = (props) => {
  const { bulbColor } = props;
  return <div className="bulb" style={{ background: bulbColor }}></div>;
};

export default Bulb;
