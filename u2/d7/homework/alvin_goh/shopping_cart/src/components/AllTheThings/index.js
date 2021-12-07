import React, { useContext } from "react";
import Product from "../Product";
import CartContext from "../../context/cart_context";

function AllTheThings(props) {
  const { products } = props;
  const { dispatchCart } = useContext(CartContext);

  const addToCart = (product) => {
    dispatchCart({ type: "ADD_PRODUCT", payload: { product: product } });
  };

  const productList = products.map((item, index) => {
    return <Product item={item} key={index} handleProduct={addToCart} />;
  });
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{productList}</ul>
    </div>
  );
}

export default AllTheThings;
