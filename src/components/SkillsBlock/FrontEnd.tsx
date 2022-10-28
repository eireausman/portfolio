import React from "react";
import styles from "./SkillsBlockContent.module.css";
import JSLogo from "../../assets/images/logoIcons/jsLogo.png";
import tsLogo from "../../assets/images/logoIcons/tsLogo.png";
import reactLogo from "../../assets/images/logoIcons/reactLogo.png";
import html5Logo from "../../assets/images/logoIcons/HTML5Logo.png";
import CSS3Logo from "../../assets/images/logoIcons/CSS3Logo.png";

const FrontEnd = () => {
  return (
    <div className={styles.containerBlock}>
      <h3 className={styles.containerBlockHeading}>Front End</h3>
      <ul>
        <li>
          <img src={reactLogo} alt="React Logo" />
          React
        </li>
        <li>
          <img src={tsLogo} alt="Typescript Logo" /> Typescript
        </li>
        <li>
          <img src={JSLogo} alt="Javascript Logo" /> Javascript (ES6+)
        </li>
        <li>
          {" "}
          <img src={html5Logo} alt="HTML Logo" />
          HTML5
        </li>
        <li>
          <img src={CSS3Logo} alt="CSS3 Logo" />
          CSS
        </li>
      </ul>
    </div>
  );
};

export default FrontEnd;
