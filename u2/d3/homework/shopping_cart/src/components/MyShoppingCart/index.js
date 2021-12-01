import React from "react";
import Product from "../Product";

function MyShoppingCart(props) {
  const { cart, prdt_onClick } = props;

  const productList = cart.map((item, index) => {
    return <Product item={item} key={index} prdt_onClick={prdt_onClick} />;
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{productList}</ul>
    </div>
  );
}

export default MyShoppingCart;
