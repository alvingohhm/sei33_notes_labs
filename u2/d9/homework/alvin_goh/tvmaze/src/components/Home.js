import React from "react";
import Results from "./Results";
import Search from "./Search";
import data from "../data/data";

const Home = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center mt-5">
      <h1 className="text-primary">TVMaze React</h1>
      <Search />
      <Results data={data} />
    </div>
  );
};

export default Home;
