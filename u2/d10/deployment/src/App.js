import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import NavBar from "./components/NavBar";

// import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";
// import PageThree from "./pages/PageThree";
// import Details from "./pages/Details";

const PageOne = React.lazy(() => import("./pages/PageOne"));
const PageTwo = React.lazy(() => import("./pages/PageTwo"));
const PageThree = React.lazy(() => import("./pages/PageThree"));
const Details = React.lazy(() => import("./pages/Details"));

function App() {
  return (
    <div className="container">
      <NavBar />

      <main>
        {/* <Suspense fallback={<p>Loading...</p>}/> */}
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              <Redirect to="/page-one" />
            </Route>
            <Route exact path="/page-one">
              <PageOne />
            </Route>
            <Route path="/page-one/:item">
              <Details />
            </Route>
            <Route path="/page-two">
              <PageTwo />
            </Route>
            <Route path="/page-three">
              <PageThree />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
