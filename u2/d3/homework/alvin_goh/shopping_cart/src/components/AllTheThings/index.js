import React from "react";
import Product from "../Product";

function AllTheThings(props) {
  const { products, getProduct } = props;

  const productList = products.map((item, index) => {
    return <Product item={item} key={index} getProduct={getProduct} />;
  });
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{productList}</ul>
    </div>
  );
}

export default AllTheThings;
