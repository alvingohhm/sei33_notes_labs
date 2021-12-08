import React from "react";
import UseCompare from "./hooks/UseCompare";

function App() {
  const arr1 = ["a", "b", "c"];
  const arr2 = ["a", "b", "c"];

  const answer = UseCompare(arr1, arr2);

  return (
    <div className="container">
      <h2>{answer}</h2>
    </div>
  );
}

export default App;
