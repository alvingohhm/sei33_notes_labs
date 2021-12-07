import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Buttons from "./Buttons";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.header}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Buttons onClick={props.okayClicked}>Okay</Buttons>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ErrorModal;
