import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/page-one">
              Page One
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/page-two">
              Page Two
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/page-three">
              Page Three
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
