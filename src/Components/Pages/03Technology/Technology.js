import React from "react";
import ClassBody from "./../../../Functions/ClassBody";
import styles from "./Technology.module.css";
import Title5Default from "./../../Others/Title5Default";
import data from "./../../../Data/data.json";
import TechnologyContent from "./TechnologyContent";

const Technology = () => {
  ClassBody("technology", ["home", "destination", "crew", "page404"]);

  const [tech, setTech] = React.useState("Launch vehicle");
  const [dados, setDados] = React.useState(null);
  const [techImg, setTechImg] = React.useState("");
  const [techImgTablet, setTechImgTablet] = React.useState("");

  React.useEffect(() => {
    setDados(
      data.technology.filter(
        ({ name }) => name.toLowerCase() === tech.toLowerCase()
      )
    );
  }, [tech]);

  React.useEffect(() => {
    async function toDefineImg() {
      const response = await import(
        `./../../../assets/technology/${dados[0].images.portrait}`
      );

      const response2 = await import(
        `./../../../assets/technology/${dados[0].images.landscape}`
      );

      setTechImg(response.default);
      setTechImgTablet(response2.default);
    }

    if (dados && dados.length > 0) {
      toDefineImg();
    }
  }, [dados]);

  React.useEffect(() => {
    document.title = "Space Tourism - Technology";
  }, []);

  return (
    <main className={styles.Technology}>
      <Title5Default number="03" text="SPACE LAUNCH 101" />
      {dados && dados.length > 0 && (
        <TechnologyContent
          dados={dados[0]}
          imgDesktop={techImg}
          imgTablet={techImgTablet}
          tech={tech}
          setTech={setTech}
        />
      )}
    </main>
  );
};

export default Technology;
