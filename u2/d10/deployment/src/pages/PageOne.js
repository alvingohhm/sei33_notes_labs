import React from "react";
import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <React.Fragment>
      <h1>This is page one</h1>
      <ul>
        <li>
          <Link to="/page-one/a">Details A</Link>
        </li>
        <li>
          <Link to="/page-one/b">Details B</Link>
        </li>
        <li>
          <Link to="/page-one/c">Details C</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default PageOne;
