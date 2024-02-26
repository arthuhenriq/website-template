import React from "react";

import styles from "./Footer.module.css";

import logo from "../assets/logo.png";
import twitter from "../assets/twitter-orange.png";
import discord from "../assets/discord-orange.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#sectionInfo">
        <img src={logo} alt="Logo Pepeiyans" className={styles.logo} />
      </a>

      <nav>
        <ul>
          <a href="#sectionInfo">
            <li className={styles.link}>Home</li>
          </a>
          <a href="#sectionInfo">
            <li className={styles.link}>History</li>
          </a>
          <a href="#sectionGallery">
            <li className={styles.link}>Gallery</li>
          </a>
          <a href="#sectionTimeline">
            <li className={styles.link}>Info</li>
          </a>
        </ul>
      </nav>

      <div>
        <Link
          to="https://twitter.com/pepeiyans"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter Pepeiyans" className={styles.image} />
        </Link>
        <Link
          to="https://discord.com/invite/zTtc4KJwC8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} alt="Discord Pepeiyans" className={styles.image} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
