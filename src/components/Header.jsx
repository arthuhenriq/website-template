import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  console.log(menuOpen);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="#sectionInfo">
        <img src={logo} alt="Logo Pepeiyans" className={styles.logo} />
      </a>
      <nav
        className={`${styles.menuLinks} ${
          menuOpen ? styles.menuOpen : styles.menuClosed
        }`}
      >
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
          <li>
            <Link
              to="https://twitter.com/pepeiyans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter Pepeiyans"
                className={styles.image}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://discord.com/invite/zTtc4KJwC8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={discord}
                alt="Twitter Pepeiyans"
                className={styles.image}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div
          className={`${styles.menuBar} ${menuOpen ? styles.bar1Open : ""}`}
        ></div>
        <div
          className={`${styles.menuBar} ${menuOpen ? styles.bar2Open : ""}`}
        ></div>
        <div
          className={`${styles.menuBar} ${menuOpen ? styles.bar3Open : ""}`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
