import React from "react";
import "./Bedroom.css";

const Bedroom = (props) => {
  return (
    <div className="bedroom d-flex justify-content-center align-items-center">
      <h4 className="text-light">Bedroom {props.roomId}</h4>
    </div>
  );
};

export default Bedroom;
