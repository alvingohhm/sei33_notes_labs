import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./pages/Main";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import NavBar from "./components/NavBar";
import Details from "./pages/Details";

// function App() {
//   return (
//     <div className="container">
//       <NavBar />
//       <Switch>
//         <Route exact path="/">
//           <Redirect to="/page-one" />
//           {/* <Main /> */}
//         </Route>
//         <Route exact path="/page-one">
//           <PageOne />
//         </Route>
//         <Route path="/page-one/:item">
//           <Details />
//         </Route>
//         <Route path="/page-two">
//           <PageTwo />
//         </Route>
//         <Route path="/page-three">
//           <PageThree />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/page-one" />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-one/:item" element={<Details />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
      </Routes>
    </div>
  );
}

export default App;
