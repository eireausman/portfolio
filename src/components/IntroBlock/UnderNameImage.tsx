import React from "react";
import profilePicture from "../../assets/images/ProfilePicLinkedIn.png";
import styles from "./UnderNameImage.module.css";

const UnderNameImage = () => {
  return (
    <img
      src={profilePicture}
      className={styles.underNameImage}
      alt="profile of Darren Reilly"
    />
  );
};

export default UnderNameImage;
