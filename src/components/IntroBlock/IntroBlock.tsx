import React from "react";
import AboutMe from "./AboutMe";
import styles from "./IntroBlock.module.css";
import NameIntro from "../NameIntro/NameIntro";
import UnderNameImage from "./UnderNameImage";

const IntroBlock = () => {
  return (
    <>
      <section className={styles.mainBlockContainer}>
        <UnderNameImage />
        <AboutMe />
      </section>
    </>
  );
};

export default IntroBlock;
