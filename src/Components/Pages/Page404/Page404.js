import React from "react";
import styles from "./Page404.module.css";
import ClassBody from "../../../Functions/ClassBody";

export const Page404 = () => {
  ClassBody("page404", ["home", "destination", "crew", "technology"]);
  return (
    <main className={styles.Page404}>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
    </main>
  );
};
