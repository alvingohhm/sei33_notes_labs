import React, { useState, useEffect, useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const ReactApp = () => {
  const [clicked, setClicked] = useState(0);
  const mountRef = useRef(false);

  const handleClick = () => {
    setClicked(clicked + 1);
  };

  useEffect(() => {
    if (mountRef.current) {
      console.log("click change");
    }
  }, [clicked]);

  useEffect(() => {
    mountRef.current = true;
  }, []);

  // runs on render (mount)
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // runs when clicked changes
  // useEffect(() => {
  //   console.log(object);
  // }, [clicked]);

  // useEffect(() => {
  //   //if email is valid
  //   // find @ .com
  //   //setValidemail

  // }, [inputEmail])

  //unmount
  // useEffect(() => {
  //   console.log("another change")
  //   return () => {
  //     if (clicked > 10){
  //       setClicked(0)
  //     }
  //   }
  // }, [another])

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <h2>{clicked}</h2>
    </>
  );
};

export default ReactApp;
