import React from "react";

const Img = (props) => {
  const { src, width, height, title } = props;
  return (
    <img
      src={src}
      className="rounded mx-auto d-block shadow-lg p-0"
      style={{ width: width + "px", height: height + "px" }}
      alt={title}
    ></img>
  );
};

export default Img;
