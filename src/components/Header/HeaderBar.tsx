import React from "react";
import Logo from "./Logo";
import HeaderOptionsList from "./HeaderOptionsList";
import styles from "./HeaderBar.module.css";

const HomepageHeader = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <HeaderOptionsList />
    </section>
  );
};

export default HomepageHeader;
