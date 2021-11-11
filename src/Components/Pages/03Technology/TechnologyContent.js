import React from "react";
import styles from "./TechnologyContent.module.css";

const techs = [
  { name: "Launch vehicle", text: "1" },
  { name: "Spaceport", text: "2" },
  { name: "Space capsule", text: "3" },
];

const TechnologyContent = ({ dados, imgDesktop, imgTablet, tech, setTech }) => {
  return (
    <section className={styles.TechnologyContent}>
      <div className={styles.Info}>
        <div className={styles.Buttons}>
          {techs.map(({ name, text }) => (
            <button
              key={name}
              className={`${styles.Button} ${
                name === tech ? styles.Active : ""
              }`}
              onClick={() => setTech(name)}
            >
              {text}
            </button>
          ))}
        </div>

        <div className={styles.Text}>
          <p className={`${styles.SubTitle}`}>THE TERMINOLOGY…</p>
          <h3 className={`${styles.Name}`}>{dados.name}</h3>
          <p className={`text-body ${styles.Description}`}>
            {dados.description}
          </p>
        </div>
      </div>

      <div className={styles.Img}>
        <img className={styles.ImgDesktop} src={imgDesktop} alt={dados.name} />
        <img className={styles.imgTablet} src={imgTablet} alt={dados.name} />
      </div>
    </section>
  );
};

export default TechnologyContent;
