import React from "react";
import BackEnd from "./BackEnd";
import Tools from "./Tools";
import FrontEnd from "./FrontEnd";
import styles from "./SkillsBlockContainer.module.css";

const SkillsBlockContainer = () => {
  return (
    <>
      <h1 className={styles.headingText}>Skills and Experience</h1>
      <section className={styles.skillsBlockContainer}>
        <FrontEnd />
        <BackEnd />
        <Tools />
      </section>
    </>
  );
};

export default SkillsBlockContainer;
