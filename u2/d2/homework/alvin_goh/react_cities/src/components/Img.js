import React from "react";

const Img = (props) => {
  const { imgSrc, alt, idSelected } = props;
  if (alt === "bigimage") {
    return <img id={alt} src={imgSrc} alt={alt} />;
  }

  if (alt === idSelected) {
    return (
      <img id={alt} className="thumb selectedImg" src={imgSrc} alt={alt} />
    );
  } else {
    return <img id={alt} className="thumb" src={imgSrc} alt={alt} />;
  }
};

export default Img;
