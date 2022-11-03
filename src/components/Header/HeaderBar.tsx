import React, { useRef } from "react";
import Logo from "./Logo";
import HeaderOptionsList from "./HeaderOptionsList";
import styles from "./HeaderBar.module.css";
import useCheckIfElementAtWindowTop from "../../HooksShared/useuseCheckIfElementAtWindowTop";

const HomepageHeader = () => {
  const headerBarSection = useRef<HTMLElement>(null);
  const isAtTop: boolean = useCheckIfElementAtWindowTop(headerBarSection);

  return (
    <section
      ref={headerBarSection}
      className={
        isAtTop === false
          ? `${styles.container}  mainBG`
          : `${styles.container} ${styles.containerSticky}  mainBG`
      }
    >
      <Logo />
      <HeaderOptionsList />
    </section>
  );
};

export default HomepageHeader;
