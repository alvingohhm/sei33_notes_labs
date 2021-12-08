import React from "react";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Procedures from "./components/Procedures";

function App() {
  return (
    <div>
      <nav>
        <a href="/">Go to Home Page</a>
        <a href="/procedures">See Our Procedures</a>
        <a href="/contact">Contact Us!</a>
      </nav>
      <div>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/procedures">
          <Procedures />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
}

export default App;
