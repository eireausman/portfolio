import React from "react";
import styles from "./NameIntro.module.css";

const NameIntro = () => {
  return (
    <>
      <h1 className={`${styles.headingText}  ${styles.indentHeading}`}>
        Darren Reilly
      </h1>
      <h1 className={`${styles.headingText}`}>Full-Stack </h1>
      <h1 className={`${styles.headingText}  ${styles.indentHeading}`}>
        Software Developer
      </h1>
    </>
  );
};

export default NameIntro;
