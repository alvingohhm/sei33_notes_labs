// import React, { useState } from "react";

// const Parent = () => {
//   // 0 is the intial value of var count
//   const [count, setCount] = useState(0);

//   const handlePlusCount = () => {
//     setCount(count + 1);
//   };

//   const handleMinusCount = () => {
//     setCount(count - 1);
//   };

//   return (
//   <div></div>
//   );
// };

// export default Parent;

import React, { useState } from "react";

const Parent = () => {
  let [count, setCount] = useState(0);

  const handlePlusCount = () => {
    setCount(count + 1);
  };

  const handleMinusCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlePlusCount}>+</button>
      <button onClick={handleMinusCount}>-</button>
    </>
  );
};

export default Parent;
