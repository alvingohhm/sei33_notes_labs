import React from "react";
import bulbData from "../data/bulbData";
import Bulb from "./Bulb";

const TrafficLight = (props) => {
  const { idClicked } = props;

  const bulbs = bulbData.map((item, index) => {
    if (idClicked === "" || idClicked !== item.id) {
      item = { item, color: "black" };
    }
    return <Bulb key={index} bulbColor={item.color} />;
  });
  return <div id="traffic-lights">{bulbs}</div>;
};

export default TrafficLight;
