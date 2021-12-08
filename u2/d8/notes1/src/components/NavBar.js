import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <header className={styles.navbar}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Main</Link>
//           </li>
//           <li>
//             <Link to="/page-one">Page One</Link>
//           </li>
//           <li>
//             <Link to="/page-two">Page Two</Link>
//           </li>
//           <li>
//             <Link to="/page-three">Page Three</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          {/* <li>
            <NavLink exact activeClassName={styles.active} to="/">
              Main
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/page-one"
            >
              Page One
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/page-two"
            >
              Page Two
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/page-three"
            >
              Page Three
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
