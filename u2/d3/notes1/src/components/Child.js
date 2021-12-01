import React from "react";

const Child = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const childData = { country: "Singapore" };
    props.onSave(childData); //parent function pass in from onSave props
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <button type="submit">Lift state</button>
      </form>
    </>
  );
};

export default Child;

//controlled state make input state get from useState
// <input value={from useState}></input>
// Store state on parent, so that child can pass over state and share among themself
