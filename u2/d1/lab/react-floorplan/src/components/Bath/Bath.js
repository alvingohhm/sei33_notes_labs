import React from "react";
import "./Bath.css";

const Bath = (props) => {
  return (
    <div
      className={`bath d-flex justify-content-center align-items-center flex-column ${props.ht}`}
    >
      <h4 className="text-light m-0">{props.bathType} Bath</h4>
    </div>
  );
};

export default Bath;
