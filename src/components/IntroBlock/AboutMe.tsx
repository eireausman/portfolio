import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.AboutMeTextContainer}>
      <p>
        For over 20 years, I have successfully led large and complex IT projects
        and programmes at a senior level in global financial services
        organisations. I am adept at leading technical teams towards a common
        goal and in having teams deliver high-quality outcomes, I have found
        myself wanting to get back to a more technical role.{" "}
      </p>
      <p>
        I recently permanently moved from the UK to Australia and have used this
        opportunity to refamiliarise myself with software development, having
        operated in a full-stack capacity in the past. I have mainly focussed on
        the web and am looking forward to joining a team to help solve some
        challenging problems.
      </p>
      <p>
        I am a dedicated, self-starter who is looking to learn and become a key
        contributor as quickly as possible. I am immediately available for
        front-end and full-stack software development roles.
      </p>
    </div>
  );
};

export default AboutMe;
