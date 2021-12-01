import React from "react";
import Product from "../Product";

function AllTheThings(props) {
  const { products, prdt_onClick } = props;

  const productList = products.map((item, index) => {
    return <Product item={item} key={index} prdt_onClick={prdt_onClick} />;
  });
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{productList}</ul>
    </div>
  );
}

export default AllTheThings;
