import React from "react";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-3 sidebar">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  <span data-feather="home"></span>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <span data-feather="file"></span>
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <span data-feather="shopping-cart"></span>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <span data-feather="users"></span>
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <span data-feather="layers"></span>
                  Integrations
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="col-9">hello</div>
      </div>
    </div>
  );
}

export default App;
