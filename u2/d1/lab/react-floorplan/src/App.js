import React from "react";
import Bath from "./components/Bath/Bath";
import Bedroom from "./components/Bedroom/Bedroom";
import Kitchen from "./components/Kitchen/Kitchen";
import LivingRoom from "./components/LivingRoom/LivingRoom";

function App() {
  return (
    // <div className="container-fluid">
    //   <Bedroom roomId="1" />
    //   <Kitchen />
    //   <Bath bathType="Full" />
    //   <Bedroom roomId="2" />
    //   <LivingRoom />
    //   <Bath bathType="Half" />
    //   <Bedroom roomId="3" />
    // </div>
    <div className="container">
      <div className="row">
        <div className="col-5 p-0">
          <Bedroom roomId="1" />
          <Bath bathType="Full" ht="full-bath-ht" />
        </div>
        <div className="col-5 p-0">
          <LivingRoom />
        </div>
        <div className="col p-0">
          <Kitchen />
        </div>
      </div>
      <div className="row">
        <div className="col-5 p-0 ">
          <Bedroom roomId="2" />
        </div>
        <div className="col p-0">
          <Bath bathType="Half" ht="h-100" />
        </div>
        <div className="col-5 p-0">
          <Bedroom roomId="3" />
        </div>
      </div>
    </div>
  );
}

export default App;
