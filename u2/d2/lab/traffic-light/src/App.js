import React, { useState } from "react";
import TrafficLight from "./components/TrafficLight";

function App() {
  const [selectedId, setSelectedId] = useState("");

  const buttonClicked = (event) => {
    setSelectedId(event.target.id);
  };

  return (
    <div className="App">
      <section>
        <div id="control-panel">
          <h2 id="stop" className="button" onClick={buttonClicked}>
            Stop
          </h2>
          <h2 id="slow" className="button" onClick={buttonClicked}>
            Slow
          </h2>
          <h2 id="go" className="button" onClick={buttonClicked}>
            Go
          </h2>
        </div>
        <TrafficLight idClicked={selectedId} />
      </section>
    </div>
  );
}

export default App;
