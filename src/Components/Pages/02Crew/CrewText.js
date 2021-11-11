import React from "react";
import styles from "./CrewText.module.css";

const crews = ["Commander", "Mission Specialist", "Pilot", "Flight Engineer"];

const CrewText = ({ dados, crew, setCrew, animation }) => {
  return (
    <section className={styles.Text}>
      <div className={animation ? styles.Animation : ""}>
        <h4 className={styles.Role}>{dados.role}</h4>
        <h3 className={styles.Name}>{dados.name}</h3>
        <p className={`text-body ${styles.Bio}`}>{dados.bio}</p>
      </div>
      <div className={styles.Buttons}>
        {crews.map((i) => (
          <button
            key={i}
            className={`${styles.Button} ${crew === i ? styles.Active : ""}`}
            onClick={() => setCrew(i)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CrewText;
