import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  // note: react setState and useState within same function will not get the update
  // value immediately (will lack by 1 update behind mean it get the prev value). However
  // jsx part will get the update value. This is due to function closure.
  // Tips:
  // 1. keep it simple. Try seperate the use and set state in different order
  // 2. use useEffect to seperate them.
  // 3. some hacky way like below but not so elegant, try not to use.
  // 4. in function or useEffect try to set a single state to keep it simple
  // setValue((state) => {
  //   console.log(state); // "React is awesome!"

  //   return state;
  // });

  const firstRender = useRef(true); //use ref to prevent useEffect to run on the 1st render
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  // console.log("product ->", product);
  const [error, setError] = useState({
    name: { isErr: false, msg: "" },
    price: { isErr: false, msg: "" },
    desc: { isErr: false, msg: "" },
  });
  const [validForm, setValidForm] = useState(false); // whether form are valid or invalid
  const [submitWithErr, setSubmitWithErr] = useState(false); // whether there are errors when submit button clicked.

  //when product's name, price and description change validation will run but not the first render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setValidForm(validateForm());
  }, [product]); // eslint-disable-line react-hooks/exhaustive-deps

  const fieldOnChange = (evt) => {
    setProduct({ ...product, [evt.target.id]: evt.target.value });
  };

  //form validation logic
  const validateForm = () => {
    let err = {};

    if (product.name.trim().length === 0) {
      err.name = { isErr: true, msg: "Input field cannot be blank" };
      // setErrorName({ isErr: true, msg: "Input field cannot be blank" });
    } else {
      err.name = { isErr: false, msg: "" };
    }
    if (product.price.trim().length === 0) {
      err.price = { isErr: true, msg: "Input field cannot be blank" };
      // setErrorPrice({ isErr: true, msg: "Input field cannot be blank" });
    } else {
      const regex = /^[0-9]*$/;
      if (!product.price.match(regex)) {
        err.price = { isErr: true, msg: "Only numbers and no $ sign allow" };
      } else {
        err.price = { isErr: false, msg: "" };
      }
    }
    if (product.description.trim().length === 0) {
      err.desc = { isErr: true, msg: "Input field cannot be blank" };
      // setErrorDesc({ isErr: true, msg: "Input field cannot be blank" });
    } else {
      err.desc = { isErr: false, msg: "" };
    }
    console.log(err);
    setError({ ...error, ...err });

    if (
      product.name.trim().length > 0 &&
      product.price.trim().length > 0 &&
      product.description.trim().length > 0 &&
      !err.price.isErr
    ) {
      setSubmitWithErr(false);
      return true;
    }
    return false;
  };

  //task to do when submi button clicked
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validForm) {
      props.getNewProduct(product);
      setSubmitWithErr(false);
    } else {
      setSubmitWithErr(true);
      if (!error.name.isErr && !error.price.isErr && !error.desc.isErr) {
        validateForm();
      }
    }
  };

  return (
    <>
      <div id="submit-msg">
        {submitWithErr ? "Cannot submit as there are errors." : ""}
      </div>
      <form onSubmit={handleSubmit}>
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
          className={!error.price.isErr ? null : "err-border"}
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
        <button type="submit">Submit</button>
      </form>
      <div id="error-panel" style={{ height: "20px" }}>
        <div>{error.name.isErr ? error.name.msg : ""}</div>
        <div>{error.price.isErr ? error.price.msg : ""}</div>
        <div>{error.desc.isErr ? error.desc.msg : ""}</div>
      </div>
    </>
  );
};

export default Form;

// {`${errorName[0]}, ${errorPrice[0]}, ${errorDesc[0]}`}
// className={!errorPrice[0] ? null : "err-border"}
