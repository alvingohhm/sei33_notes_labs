import React, { useState } from "react";

const Form = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  console.log("product - ", product);

  const fieldOnChange = (evt) => {
    setProduct((prevState) => {
      return { ...prevState, [evt.target.id]: evt.target.value };
    });
  };

  return (
    <form>
      <input
        id="name"
        type="text"
        placeholder="product name"
        value={product.name}
        onChange={fieldOnChange}
      />
      <input
        id="price"
        type="text"
        placeholder="price"
        value={product.price}
        onChange={fieldOnChange}
      />
      <input
        id="description"
        type="text"
        placeholder="description"
        value={product.description}
        onChange={fieldOnChange}
      />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          props.getNewProduct(product);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
