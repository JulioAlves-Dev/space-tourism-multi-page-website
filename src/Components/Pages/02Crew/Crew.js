import React from "react";
import ClassBody from "../../../Functions/ClassBody";
import Title5Default from "../../Others/Title5Default";
import data from "./../../../Data/data.json";
import styles from "./Crew.module.css";
import CrewText from "./CrewText";

const Crew = () => {
  ClassBody("crew", ["technology", "destination", "home", "page404"]);
  const [crew, setCrew] = React.useState("Commander");
  const [dados, setDados] = React.useState(null);
  const [crewImg, setCrewImg] = React.useState("");

  React.useEffect(() => {
    setDados(
      data.crew.filter(({ role }) => role.toLowerCase() === crew.toLowerCase())
    );
  }, [crew]);

  React.useEffect(() => {
    async function toDefineImg() {
      const response = await import(
        `./../../../assets/crew/${dados[0].images.png}`
      );

      setCrewImg(response.default);
    }

    if (dados && dados.length > 0) {
      toDefineImg();
    }
  }, [dados]);

  React.useEffect(() => {
    document.title = "Space Tourism - Crew";
  }, []);

  return (
    <>
      <div className={styles.SubTitleH5}>
        <Title5Default number="02" text="Meet your crew" />
      </div>

      <main className={styles.Crew}>
        {dados && dados.length > 0 && (
          <CrewText dados={dados[0]} crew={crew} setCrew={setCrew} />
        )}

        <section className={styles.Img}>
          {crewImg && <img src={crewImg} alt={dados[0].role} />}
        </section>
      </main>
    </>
  );
};

export default Crew;
