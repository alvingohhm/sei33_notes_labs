import React from "react";
import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <button
      className={`btn ${styles.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Buttons;
