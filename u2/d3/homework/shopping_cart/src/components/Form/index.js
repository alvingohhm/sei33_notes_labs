import React, { useState } from "react";

function Form(props) {
  // const [product, setproduct] = useState({
  //   name: "",
  //   price: "",
  //   description: "",
  // });
  const [pname, setpname] = useState("");
  const submitClicked = () => {
    console.log(pname);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="product name"
        value={pname}
        onChange={(evt) => {
          setpname(evt.target.value);
        }}
      />
      <input type="text" placeholder="price" />
      <input type="text" placeholder="description" />
      <button onClick={submitClicked}>Submit</button>
    </form>
  );
}

export default Form;
