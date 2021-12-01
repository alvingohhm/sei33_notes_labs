import React from "react";

const Product = (props) => {
  const { item, prdt_onClick } = props;
  return (
    <li
      onClick={() => prdt_onClick(item)}
    >{`${item.name} - $${item.price}`}</li>
  );
};

export default Product;
