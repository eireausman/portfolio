import React, { useEffect, useRef, useState } from "react";
import wavingHand from "../../assets/images/wavingHand.png";
import styles from "./HeaderOptionsList.module.css";
import { motion } from "framer-motion";
import useSetMenuState from "./useSetMenuState";
import Menu from "../Menu/Menu";

const HeaderOptionsList = () => {
  const [menuHoverState, setMenuHoverState] = useState<boolean>(false);
  const menuState = useSetMenuState(menuHoverState);

  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  };

  const keyAction = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") setMenuHoverState(!menuHoverState);
  };

  return (
    <div
      tabIndex={0}
      className={styles.headerOptionsListContainer}
      onKeyUp={(e) => {
        keyAction(e);
      }}
    >
      <h3
        className={styles.headerOptionsContactLink}
        onClick={() => {
          setMenuHoverState(!menuHoverState);
        }}
      >
        Reach Out
      </h3>
      <motion.img
        transition={{
          y: transitionValues,
        }}
        animate={{
          y: ["0rem", "0.3rem", "-0.3rem"],
          rotate: menuState.spinHand ? 90 : 0,
        }}
        className={styles.wavingHand}
        src={wavingHand}
        alt="Click to get in touch"
      />
      {menuState.showMenu === true && (
        <Menu setMenuHoverState={setMenuHoverState} />
      )}
    </div>
  );
};

export default HeaderOptionsList;
