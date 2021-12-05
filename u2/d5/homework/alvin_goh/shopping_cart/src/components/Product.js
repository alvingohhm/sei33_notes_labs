import React from "react";

const Product = (props) => {
  const { item, getProduct } = props;
  return (
    <li onClick={() => getProduct(item)}>
      {`${item.name} - $${item.price}`}
      <br />
      {item.description}
    </li>
  );
};

export default Product;
