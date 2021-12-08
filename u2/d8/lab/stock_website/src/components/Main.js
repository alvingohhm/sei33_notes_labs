import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
import DataContext from "../context/data_context";
import Stock from "./Stock";

function Main(props) {
  const { stockData } = props;
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/stocks/:symbol">
          <Stock stockData={stockData} />
        </Route>
        <Route path="/stocks">
          <DataContext.Provider value={{ stockData }}>
            <Dashboard />
          </DataContext.Provider>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
