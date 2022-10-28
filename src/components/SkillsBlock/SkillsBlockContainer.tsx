import React from "react";
import BackEnd from "./BackEnd";
import Exposures from "./Exposures";
import FrontEnd from "./FrontEnd";
import styles from "./SkillsBlockContainer.module.css";

const SkillsBlockContainer = () => {
  return (
    <>
      <h1 className={styles.headingText}>Skills and Experience</h1>
      <section className={styles.skillsBlockContainer}>
        <FrontEnd />
        <BackEnd />
        <Exposures />
      </section>
    </>
  );
};

export default SkillsBlockContainer;
