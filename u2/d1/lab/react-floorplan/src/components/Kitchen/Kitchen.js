import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";
import "./Kitchen.css";

const Kitchen = () => {
  return (
    <div className="kitchen d-flex flex-column">
      <div className="d-flex">
        <Oven />
        <Sink />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <h4 className="text-light">Kitchen</h4>
      </div>
    </div>
  );
};

export default Kitchen;
