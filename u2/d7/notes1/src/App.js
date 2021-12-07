import React, { useState } from "react";
import ChickenContext from "./context/chicken-context";
import Parent from "./components/Parent";
import Child from "./components/Child";

function App() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ChickenContext.Provider value={{ userName, setUsername, email, setEmail }}>
      <div className="container">
        <h2>Parent:</h2>
        <Parent />
        <br />
        <h2>Child:</h2>
        <Child />
      </div>
    </ChickenContext.Provider>
  );
}

export default App;
