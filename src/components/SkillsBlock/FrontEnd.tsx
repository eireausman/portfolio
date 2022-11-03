import React from "react";
import styles from "./SkillsBlockContent.module.css";

const FrontEnd = () => {
  return (
    <div className={styles.containerBlock}>
      <h3 className={styles.containerBlockHeading}>Front End</h3>
      <ul>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React Logo"
          />
          React
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            alt="Typescript Logo"
          />
          Typescript
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
            alt="NextJS Logo"
          />
          NextJS
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            alt="Javascript Logo"
          />
          Javascript (ES6+)
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            alt="HTML Logo"
          />
          HTML5
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="CSS3 Logo"
          />
          CSS
        </li>
      </ul>
    </div>
  );
};

export default FrontEnd;
