import React from "react";
import styles from "./DestinationText.module.css";

const destinations = ["moon", "mars", "europa", "titan"];

const DestinationText = ({ dados, destination, setDestination }) => {
  return (
    <div className={styles.DestinationText}>
      <nav className={styles.Nav}>
        <ul>
          {destinations.map((name) => (
            <li key={name}>
              <button
                onClick={() => setDestination(name)}
                className={`${name === "titan" ? styles.Titan : ""} ${
                  name === destination ? styles.Active : ""
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <h2>{dados.name}</h2>
      <p className={`text-body ${styles.Description}`}>{dados.description}</p>

      <div className={styles.Infos}>
        <div className={styles.Distance}>
          <p className={`sub-heading-2 ${styles.InfoSubTitle}`}>
            Avg. Distance
          </p>
          <p className="sub-heading-1">{dados.distance}</p>
        </div>

        <div className={styles.Days}>
          <p className={`sub-heading-2 ${styles.InfoSubTitle}`}>
            Est. travel time
          </p>
          <p className="sub-heading-1">{dados.travel}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationText;
