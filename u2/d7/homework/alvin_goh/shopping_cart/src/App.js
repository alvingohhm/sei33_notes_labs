import React, { useReducer } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import Form from "./components/Form";
import productsArr from "./data/products";
import CartContext from "./context/cart_context";

const productsReducer = (products, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      return [action.payload.product, ...products];
    default:
      return products;
  }
};

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...cart, action.payload.product];
    case "REMOVE_PRODUCT":
      return cart.filter((item) => item.name !== action.payload.name);
    default:
      return cart;
  }
};

function App() {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [products, dispatchProducts] = useReducer(productsReducer, productsArr);

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form dispatchProducts={dispatchProducts} />
      <div className="products">
        <CartContext.Provider value={{ cart, dispatchCart }}>
          <AllTheThings products={products} />
          <MyShoppingCart />
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;
