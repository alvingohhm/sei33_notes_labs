import React, { useState } from "react";

//capture input value
// const Parent = () => {
//   const [duck, setDuck] = useState("");
//   const [swan, setSwan] = useState("");
//   const [dove, setDove] = useState("");

//   const handleDuckChange = (event) => {
//     setDuck(event.target.value);
//   };
//   const handleSwanChange = (event) => {
//     setSwan(event.target.value);
//   };
//   const handleDoveChange = (event) => {
//     setDove(event.target.value);
//   };
//   return (
//     <>
//       <h1>Input Form</h1>
//       <div className="row">
//         <label htmlFor="duck" className="col-sm-4">
//           Duck
//         </label>
//         <input
//           type="text"
//           id="duck"
//           className="col-sm-8"
//           onChange={handleDuckChange}
//         />
//         <label htmlFor="swan" className="col-sm-4">
//           Swan
//         </label>
//         <input
//           type="text"
//           id="swan"
//           className="col-sm-8"
//           onChange={handleSwanChange}
//         />
//         <label htmlFor="dove" className="col-sm-4">
//           Dove
//         </label>
//         <input
//           type="text"
//           id="dove"
//           className="col-sm-8"
//           onChange={handleDoveChange}
//         />
//       </div>

//       <h2>{duck}</h2>
//       <h2>{swan}</h2>
//       <h2>{dove}</h2>
//     </>
//   );
// };

// export default Parent;

const Parent = () => {
  const [inputs, setInputs] = useState({ duck: "", swan: "", dove: "" });

  const handleDuckChange = (event) => {
    setInputs((prevState) => {
      return { ...prevState, duck: event.target.value };
    });
  };
  const handleSwanChange = (event) => {
    setInputs((prevState) => {
      return { ...prevState, swan: event.target.value };
    });
  };
  const handleDoveChange = (event) => {
    setInputs((prevState) => {
      return { ...prevState, dove: event.target.value };
    });
  };
  return (
    <>
      <h1>Input Form</h1>
      <div className="row">
        <label htmlFor="duck" className="col-sm-4">
          Duck
        </label>
        <input
          type="text"
          id="duck"
          className="col-sm-8"
          onChange={handleDuckChange}
        />
        <label htmlFor="swan" className="col-sm-4">
          Swan
        </label>
        <input
          type="text"
          id="swan"
          className="col-sm-8"
          onChange={handleSwanChange}
        />
        <label htmlFor="dove" className="col-sm-4">
          Dove
        </label>
        <input
          type="text"
          id="dove"
          className="col-sm-8"
          onChange={handleDoveChange}
        />
      </div>

      <h2>{inputs.duck}</h2>
      <h2>{inputs.swan}</h2>
      <h2>{inputs.dove}</h2>
    </>
  );
};

export default Parent;
