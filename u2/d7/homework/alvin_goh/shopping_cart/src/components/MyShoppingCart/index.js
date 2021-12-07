import React, { useContext } from "react";
import Product from "../Product";
import CartContext from "../../context/cart_context";

function MyShoppingCart(props) {
  const { cart, dispatchCart } = useContext(CartContext);

  const removeFromCart = (product) => {
    dispatchCart({ type: "REMOVE_PRODUCT", payload: { name: product.name } });
  };
  const productList = cart.map((item, index) => {
    return <Product item={item} key={index} handleProduct={removeFromCart} />;
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{productList}</ul>
    </div>
  );
}

export default MyShoppingCart;
