import React from "react";
import styles from "./SkillsBlockContent.module.css";

import SQLIcon from "../../assets/images/logoIcons/sqlIcon.jpeg";

const BackEnd = () => {
  return (
    <div className={styles.containerBlock}>
      <h3 className={styles.containerBlockHeading}>BackEnd</h3>
      <ul>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express Logo"
          />
          Express
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
            alt="NodeJS Logo"
          />
          NodeJS
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
            alt="NextJS Logo"
          />
          NextJS
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL logo"
          />
          PostgreSQL
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-plain.svg"
            alt="Apache logo"
          />
          Apache
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            alt="c# Logo"
          />
          C#
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
            alt="php Logo"
          />
          PHP
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
            alt="mongoDB Logo"
          />
          MongoDB
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="mySQL Logo"
          />
          MySQL
        </li>
        <li>
          {" "}
          <img src={SQLIcon} alt="SQL Logo" />
          SQL
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firestore Logo"
          />
          Firestore
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
            alt="AWS Logo"
          />
          DynamoDB + RDS
        </li>
      </ul>
    </div>
  );
};

export default BackEnd;
