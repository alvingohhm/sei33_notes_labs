import React from "react";

const Product = (props) => {
  const { item, handleProduct } = props;
  return (
    <li onClick={() => handleProduct(item)}>
      {`${item.name} - $${item.price}`}
      <br />
      {item.description}
    </li>
  );
};

export default Product;
