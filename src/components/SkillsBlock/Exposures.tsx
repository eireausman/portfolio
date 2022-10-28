import React from "react";
import styles from "./SkillsBlockContent.module.css";
import GitHub from "../../assets/images/logoIcons/githubLogo.png";

const Exposures = () => {
  return (
    <div className={styles.containerBlock}>
      <h3 className={styles.containerBlockHeading}>Exposures</h3>
      <ul>
        <li>
          <img src={GitHub} alt="GitHub" /> GitHub
        </li>
        <li>APIs</li>
        <li>Jest</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>NPM</li>
      </ul>
    </div>
  );
};

export default Exposures;
