import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import Timeline from "./Timeline";

import styles from "./Home.module.css";
import Footer from "./Footer";
import Info from "./Info";

const Home = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.animatedSection}`);
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add(styles.timelineSectionAnimation);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Limpe o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.content}>
      <Header />

      <section className={styles.infoSection} id="sectionInfo">
        <Info />
      </section>

      <section className={styles.gallerySection} id="sectionGallery">
        <h1>Gallery</h1>
        <Gallery />
      </section>

      <h1 className={styles.timeLineTitle}>Info</h1>
      <section
        className={`${styles.timelineSection} ${styles.animatedSection}`}
        id="sectionTimeline"
      >
        <Timeline
          title={"Q1"}
          information={[
            "Mint collection - 3333 PEPEIYANS",
            "Deploy $PEPE",
            "ADD liquidity ($PEPE/SEI)",
            "AIRDROP $PEPE to pepeiyans holder",
            "Staking",
            "50% royalties to buy and burn $PEPE",
          ]}
        />
        <Timeline
          title={"Q2"}
          information={[
            "List $PEPE on SEI in CEX",
            "List $PEPE in lending DAPPS",
            "Multichain liquidity $PEPE",
            "Vault (BTC/ETH/SEI) to farming and buy/burn $PEPE with profits",
          ]}
        />
        <Timeline
          title={"Q3"}
          information={[
            "Art upgrade",
            "Arcade hub games player vs player",
            "TBA",
          ]}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
