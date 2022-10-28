import React from "react";
import AboutMe from "./AboutMe";
import styles from "./IntroBlock.module.css";
import NameIntro from "./NameIntro";
import UnderNameImage from "./UnderNameBlock";

const MainBlock = () => {
  return (
    <section className={styles.mainBlockContainer}>
      <NameIntro />
      <div className={styles.mainBlockContainerUnderName}>
        <UnderNameImage />
        <AboutMe />
      </div>
    </section>
  );
};

export default MainBlock;
