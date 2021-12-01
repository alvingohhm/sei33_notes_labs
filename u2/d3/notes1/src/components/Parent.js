// morning notes
// import React, { useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//   const [theData, setTheData] = useState("");

//   const handleChildData = (enteredData) => {
//     setTheData(enteredData);
//   };
//   return (
//     <>
//       <h1>{theData.country}</h1>
//       <Child onSave={handleChildData} />
//     </>
//   );
// };

// export default Parent;

// afternoon notes
// import React, { useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//   const [word, setWord] = useState("");
//   const [number, setNumber] = useState("");

//   const handleWordChange = (event) => {
//     setWord(event.target.value);
//   };

//   const handleNumberChange = (event) => {
//     setNumber(event.target.value);
//   };
//   return;
//   <>
//     <form className="container">
//       <div className="row">
//         <div className="col-sm-">
//           <label htmlFor="word">Word</label>
//         </div>
//         <div className="col-sm-6">
//           <input
//             id="number"
//             value={word}
//             type="text"
//             onChange={handleWordChange}
//           />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-sm-">
//           <label htmlFor="word">Number</label>
//         </div>
//         <div className="col-sm-6">
//           <input
//             id="number"
//             value={number}
//             type="text"
//             onChange={handleNumberChange}
//           />
//         </div>
//       </div>
//     </form>
//   </>;
// };

// export default Parent;

//const chicken = useRef(initial value)
//nameRef = useRef()
//<input ref = {nameRef}
// nameRef.value

// using useRef
import React, { useState, useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef();

  const focus = () => {
    usernameRef.current.focus();
    console.log(usernameRef);
  };

  return (
    <>
      <div>
        <label>username</label>
        <input
          ref={usernameRef}
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={focus}>submit</button>
    </>
  );
};

export default Parent;
