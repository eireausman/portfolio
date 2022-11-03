import React, { useRef } from "react";
import styles from "./NameIntro.module.css";
import Typewriter from "typewriter-effect";
import useCheckIfElementAtWindowTop from "../../HooksShared/useuseCheckIfElementAtWindowTop";
import ScrollDownMessage from "./ScrollDownMessage";

const NameIntro = () => {
  const fullName = useRef(null);
  const NameisAtWindowTop: boolean = useCheckIfElementAtWindowTop(fullName);

  return (
    <>
      <section className={styles.nameIntroContainer}>
        <h1
          ref={fullName}
          className={`${styles.headingText}  ${styles.indentHeading}`}
        >
          Darren Reilly
        </h1>

        <h1 className={`${styles.headingText}`}>Full Stack</h1>
        <h1 className={`${styles.headingText}  ${styles.indentHeading}`}>
          <Typewriter
            onInit={(typewriter: any) => {
              typewriter
                .pauseFor(500)
                .typeString("Develop")
                .deleteAll()
                .typeString("Software Developer")
                .start();
            }}
          />
        </h1>
      </section>
      {NameisAtWindowTop === false && <ScrollDownMessage />}
    </>
  );
};

export default NameIntro;
