import React from "react";

import SearchContainer from "./SearchContainer";

const Home = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center mt-5">
      <h1 className="text-primary">TVMaze React</h1>
      <SearchContainer />
    </div>
  );
};

export default Home;
