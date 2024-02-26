import React from "react";

import styles from "./Timeline.module.css";

const Timeline = ({ title, information }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      {information.map((item, id) => (
        <ul key={id}>
          <li className={styles.link}>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default Timeline;
