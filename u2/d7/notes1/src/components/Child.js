import React, { useContext } from "react";
import ChickenContext from "../context/chicken-context";

const Child = () => {
  const chickenCtx = useContext(ChickenContext);
  return (
    <>
      <p>{chickenCtx.email}</p>
    </>
  );
};

export default Child;
