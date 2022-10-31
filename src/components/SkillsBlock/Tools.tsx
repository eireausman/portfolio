import React from "react";
import styles from "./SkillsBlockContent.module.css";

const Tools = () => {
  return (
    <div className={styles.containerBlock}>
      <h3 className={styles.containerBlockHeading}>Tools</h3>
      <ul>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          GitHub
        </li>
        <li>APIs</li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="Jest Logo"
          />
          Jest
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
            alt="WebPack logo"
          />
          Webpack
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"
            alt="Babel Logo"
          />
          Babel
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="npm Logo"
          />
          NPM
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
            alt="Heroku logo"
          />
          Heroku
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"
            alt="Gimp logo"
          />
          GIMP
        </li>
      </ul>
    </div>
  );
};

export default Tools;
