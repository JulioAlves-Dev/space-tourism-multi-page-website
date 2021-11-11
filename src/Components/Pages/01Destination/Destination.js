import React from "react";
import styles from "./Destination.module.css";
import ClassBody from "../../../Functions/ClassBody";
import data from "./../../../Data/data.json";
import DestinationText from "./DestinationText";
import Title5Default from "../../Others/Title5Default";

const Destination = () => {
  ClassBody("destination", ["technology", "home", "crew", "page404"]);
  const [destination, setDestination] = React.useState("moon");
  const [dados, setDados] = React.useState(null);
  const [destinationImg, setDestinationImg] = React.useState("");

  React.useEffect(() => {
    setDados(
      data.destinations.filter(
        ({ name }) => name.toLowerCase() === destination.toLowerCase()
      )
    );
  }, [destination]);

  React.useEffect(() => {
    setDestinationImg("");
    async function toDefineImg() {
      const response = await import(
        `./../../../assets/destination/${dados[0].images.png}`
      );

      setDestinationImg(response.default);
    }

    if (dados && dados.length > 0) {
      toDefineImg();
    }
  }, [dados]);

  React.useEffect(() => {
    document.title = "Space Tourism - Destination";
  }, []);

  return (
    <main className={styles.Destination}>
      {dados && dados.length > 0 && (
        <>
          <Title5Default number="01" text="Pick your destination" />
          <section className={styles.Info}>
            <div className={styles.ImgContent}>
              <div className={styles.Img}>
                {destinationImg && (
                  <img src={destinationImg} alt={dados[0].name} />
                )}
              </div>
            </div>
            <div className={styles.TextContent}>
              <DestinationText
                dados={dados[0]}
                destination={destination}
                setDestination={setDestination}
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Destination;
