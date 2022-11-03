import React from "react";
import DRLogo from "../../assets/images/DRLogo.png";
import styles from "./HeaderBar.module.css";

const LogoName = () => {
  // return <img src={DRLogo} alt="Site Logo" className={styles.siteLogo} />;
  return <h3 className={styles.headerPrintedName}>Darren Reilly</h3>;
};

export default LogoName;
