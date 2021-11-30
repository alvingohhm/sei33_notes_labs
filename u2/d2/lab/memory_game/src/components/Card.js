import React, { useState } from "react";

const Card = (props) => {
  const { data } = props;
  const [cardImg, setCardImg] = useState(data.backgroundImage);
  const [toggle, setToggle] = useState(true);

  const flipCard = () => {
    toggle ? setCardImg(data.cardImage) : setCardImg(data.backgroundImage);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <>
      <img src={cardImg} alt="" onClick={flipCard} />
    </>
  );
};

export default Card;
