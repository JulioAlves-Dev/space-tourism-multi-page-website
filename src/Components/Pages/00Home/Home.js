import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import ClassBody from "../../../Functions/ClassBody";

const Home = () => {
  ClassBody("home", ["technology", "destination", "crew", "page404"]);

  React.useEffect(() => {
    document.title = "Space Tourism";
  }, []);

  return (
    <main className={styles.Home}>
      <section className={styles.HomeText}>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className="text-body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className={styles.HomeExplore}>
        <Link to="destination">
          <button className={styles.ButtonExplore}>EXPLORE</button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
