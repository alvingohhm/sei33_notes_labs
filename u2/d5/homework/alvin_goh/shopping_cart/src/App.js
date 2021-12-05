import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import Form from "./components/Form";
import productsArr from "./data/products";

function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addNewProducts = (product) => {
    setProducts([product, ...products]);
  };

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
      <Form getNewProduct={addNewProducts} />
      <div className="products">
        <AllTheThings products={products} getProduct={addToCart} />
        <MyShoppingCart cart={cart} getProduct={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
