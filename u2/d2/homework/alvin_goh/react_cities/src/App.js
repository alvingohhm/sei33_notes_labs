import React, { useState } from "react";
import Img from "./components/Img";
import imagesArr from "./data/imageData";
import "./styles.css";

function App() {
  const [imgSelected, setimgSelected] = useState(imagesArr[0].img);
  const [idSelected, setidSelected] = useState("");

  const getImgSelected = (evt) => {
    if (evt.target.src !== undefined) {
      setimgSelected(evt.target.src);
      setidSelected(evt.target.id);
    }
  };
  const getImg = imagesArr.map((item, index) => {
    return (
      <Img
        imgSrc={item.img}
        alt={item.city}
        key={index}
        idSelected={idSelected}
      />
    );
  });
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper" onClick={getImgSelected}>
        <div id="thumbnails">{getImg}</div>
        <Img imgSrc={imgSelected} alt="bigimage" />
      </div>
    </div>
  );
}

export default App;
