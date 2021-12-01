import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import Form from "./components/Form";
import productsArr from "./data/products";
import { Children } from "react";

function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings products={products} prdt_onClick={addToCart} />
        <MyShoppingCart cart={cart} prdt_onClick={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
