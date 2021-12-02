import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import birds from "./data/BirdsData";
function App() {
  const [birdsData, setbirdsData] = useState(birds);

  const addNewBirdData = (birdData) => {
    setbirdsData([birdData, ...birdsData]);
  };

  // console.log(birdsData);
  const listBirds = birdsData.map((item, index) => {
    return (
      <Card
        imgSrc={item.image}
        birdName={item.birdName}
        userName={item.user}
        approved={item.approved}
        key={index}
      />
    );
  });
  return (
    <div className="container">
      <Form getNewBirdData={addNewBirdData} />
      {listBirds}
    </div>
  );
}

export default App;
