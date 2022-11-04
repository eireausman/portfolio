import React, { useRef } from "react";
import LogoName from "./LogoName";
import ReachOut from "./ReachOut";
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
      {isAtTop === true && (
        <>
          <LogoName />
          <ReachOut />
        </>
      )}
    </section>
  );
};

export default HomepageHeader;
