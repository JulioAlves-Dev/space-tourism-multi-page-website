import React from "react";
import styles from "./Title5Default.module.css";

const Title5Default = ({ number, text }) => {
  return (
    <h5 className={styles.Title}>
      <span>{number}</span>
      {text}
    </h5>
  );
};

export default Title5Default;
