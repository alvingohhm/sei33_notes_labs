import React, { useState } from "react";
import BottomPanel from "./components/BottomPanel";
import TopPanel from "./components/TopPanel";

function App() {
  const [itemList, setitemList] = useState([]);

  const addItem = (item) => {
    setitemList([item, ...itemList]);
  };

  return (
    <div className="container">
      <h1 className="my-3">Expense App</h1>
      <TopPanel addItem={addItem} />
      <BottomPanel itemList={itemList} />
    </div>
  );
}

export default App;
