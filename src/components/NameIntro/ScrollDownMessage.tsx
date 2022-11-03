import React from "react";
import styles from "./ScrollDownMessage.module.css";
import { motion } from "framer-motion";
import arrowDown from "../../assets/images/scrollDownArrow.svg";

const ScrollDownMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, translateX: -2, translateY: -200 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 1.5,
        delay: 1,
      }}
      className={styles.scrollDownMessageContainer}
    >
      <div>SCROLL DOWN</div>

      <img
        className={styles.scrollDownArrow}
        src={arrowDown}
        alt="arrow pointing downward"
      />
    </motion.div>
  );
};

export default ScrollDownMessage;
