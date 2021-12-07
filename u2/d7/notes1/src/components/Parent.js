import React, { useContext } from "react";
import ChickenContext from "../context/chicken-context";

const Parent = () => {
  const chickenCtx = useContext(ChickenContext);
  console.log(chickenCtx);

  const handleButtonClick = () => {
    chickenCtx.setEmail("me@mail.com");
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <p>{chickenCtx.email}</p>
        </div>
        <div className="col-sm-4">
          <button onClick={handleButtonClick}>Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Parent;
