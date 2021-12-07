import React, { useState } from "react";
import { receipt1, receipt2, receipt3 } from "./data/Receipts";

function App() {
  const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3]);
  console.log(receipt1);
  return (
    <div>
      <h1 className="truck-name">Korilla</h1>
      <div className="container" style={containerStyle}></div>
    </div>
  );
}

export default App;
