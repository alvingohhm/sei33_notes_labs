import React, { useState } from "react";
import Card from "./components/Card";
import birds from "./data/BirdsData";
function App() {
  const [birdsData, setbirdsData] = useState(birds);

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
      <form>
        <div className="form-group">
          <label htmlfor="birdUrl">Image Url</label>
          <input type="text" className="form-control" id="birdUrl"  placeholder="Enter your image url" />
          <label htmlfor="birdUrl">Image Url</label>
          <input type="text" className="form-control" id="birdUrl"  placeholder="Enter your image url" />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      {listBirds}
    </div>
  );
}

export default App;
