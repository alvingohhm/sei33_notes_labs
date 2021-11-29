import "./Card.css";
import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="row div-border">
        {JSON.stringify(props)}
        <div className="col-sm-5">{props.activity}</div>
        <div className="col-sm-5">{props.time}</div>
      </div>
    </div>
  );
};

export default Card;
