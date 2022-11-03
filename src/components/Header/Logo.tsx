import React from "react";
import DRLogo from "../../assets/images/DRLogo.png";
import styles from "./HeaderBar.module.css";

const Logo = () => {
  return <img src={DRLogo} alt="Site Logo" className={styles.siteLogo} />;
};

export default Logo;
