import React from "react";
import WeatherData from "./WeatherData";

const WeatherIcons = (props) => {
  return (
    <div className="weather">
      <img src={props.data.img} alt="" />
      <WeatherData condition={props.data.condition} time={props.data.time} />
    </div>
  );
};

export default WeatherIcons;
