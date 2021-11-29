import React from "react";

const WeatherData = (props) => {
  return (
    <>
      <p>
        <span>conditions:</span> {props.condition}
      </p>
      <p>
        <span>time:</span> {props.time}
      </p>
    </>
  );
};

export default WeatherData;
