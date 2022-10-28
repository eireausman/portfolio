import React from "react";
import styles from "./SkillsBlockContent.module.css";
import expressIcon from "../../assets/images/logoIcons/expressIcon.png";
import nodeJSLogo from "../../assets/images/logoIcons/nodejsLogo.jpeg";
import cSharpLogo from "../../assets/images/logoIcons/cSharpLogo.jpeg";
import nextJSIcon from "../../assets/images/logoIcons/nextJSIcon.png";
import phpLogo from "../../assets/images/logoIcons/phpLogo.png";
import mongoDBIcon from "../../assets/images/logoIcons/mongoDBIcon.jpeg";
import mySQLIcon from "../../assets/images/logoIcons/mySQLIcon.png";
import SQLIcon from "../../assets/images/logoIcons/sqlIcon.jpeg";
import FirestoreIcon from "../../assets/images/logoIcons/fireStoreIcon.png";
import DynamoDBIcon from "../../assets/images/logoIcons/dynamoDBIcon.png";

const BackEnd = () => {
  return (
    <div className={styles.containerBlock}>
      <h3 className={styles.containerBlockHeading}>BackEnd</h3>
      <ul>
        <li>
          <img src={expressIcon} alt="Express Logo" />
          Express
        </li>
        <li>
          <img src={nodeJSLogo} alt="NodeJS Logo" />
          NodeJS
        </li>
        <li>
          <img src={nextJSIcon} alt="NextJS Logo" />
          NextJS
        </li>
        <li>
          {" "}
          <img src={cSharpLogo} alt="c# Logo" />
          C#
        </li>
        <li>
          <img src={phpLogo} alt="php Logo" />
          PHP
        </li>
        <li>
          <img src={mongoDBIcon} alt="mongoDB Logo" />
          MongoDB
        </li>
        <li>
          <img src={mySQLIcon} alt="mySQL Logo" />
          MySQL
        </li>
        <li>
          {" "}
          <img src={SQLIcon} alt="SQL Logo" />
          SQL
        </li>
        <li>
          {" "}
          <img src={FirestoreIcon} alt="Firestore Logo" />
          Firestore
        </li>
        <li>
          {" "}
          <img src={DynamoDBIcon} alt="DynamoDB Logo" />
          DynamoDB
        </li>
      </ul>
    </div>
  );
};

export default BackEnd;
