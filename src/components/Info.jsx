import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "./Info.module.css";

import pepeiyan from "../assets/pepeiyan.png";

const Info = () => {
  const [text, setText] = React.useState([
    "Pepeiyans emerges thanks to the Sei Network community, which day by day has generated thousands of JPEGs of Pepe Saiyan, exerting a considerable influence on the network. This enthusiasm strongly motivated the development of a fun project with an ideal brand to allow everyone to identify and become part of a community widely supported across various platforms. Simultaneously, it aims to provide a pixel art of exceptionally high quality.",
    "Sei Network has experienced significant growth within the Cosmos ecosystem due to its low fee charges and transaction speed. This has greatly promoted the network's usage in NFTs, although it is common for liquidity to subsequently migrate to tokens.",
    "Our team has been involved in cryptocurrencies since 2019, and we have full confidence that projects within Sei Network, along with their liquidity, will gradually advance towards DeFi. This confidence led to the deployment of the $PEPE meme token, known for consistently delivering high returns to projects. It can be utilized as a fund for Pepeiyan holders on lending platforms as well as on DEX/CEX platforms. Be a part of Pepeiyans and transform the Sei Network ecosystem. 🐸🔴",
  ]);

  const [aux, setAux] = React.useState(0);

  const next = () => {
    if (aux < text.length - 1) setAux((aux) => aux + 1);
  };

  const previous = () => {
    if (aux > 0) setAux((aux) => aux - 1);
  };

  return (
    <div className={styles.box}>
      <div className={styles.contentBox}>
        <h1 className={styles.title}>History</h1>
        <div className={styles.infoBox}>
          <button onClick={previous}>
            <FaArrowCircleLeft size={38} className={styles.icon} />
          </button>

          <p>{text[aux]}</p>
          <button onClick={next}>
            <FaArrowCircleRight size={38} className={styles.icon} />
          </button>
        </div>
      </div>

      <img
        src={pepeiyan}
        alt="Pepeiyan info picture."
        className={styles.image}
      />
    </div>
  );
};

export default Info;
