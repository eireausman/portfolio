import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsBlockContainer.module.css";
import wealthToolImg from "../../assets/images/wealthTool.png";
import youAreHereImg from "../../assets/images/youAreHere.png";
import toDoList from "../../assets/images/toDoList.png";

const thisSite = {
  id: 1,
  title: "This Portfolio site",
  descript:
    "A singe page app to showcase development examples and provide contact details.",
  projectImg: youAreHereImg,
  gitHubAddress: "https://github.com/eireausman/portfolio",
  projectURL: "",
};

const wealthToolCard = {
  id: 2,
  title: "Net Wealth Tracker",
  descript:
    "A tool to manage your whole net wealth, including multi-currency assets and multiple global markets.",
  projectImg: wealthToolImg,
  gitHubAddress: "https://github.com/eireausman/wealth-tool",
  projectURL: "https://www.wealthtool.eireausman.com/",
};

const toDoListCard = {
  id: 3,
  title: "To Do List",
  descript:
    "A to do list application using MongoDB and  password authentication.",
  projectImg: toDoList,
  gitHubAddress: "https://github.com/eireausman/todolist-client",
  projectURL: "https://eireausman-todolist.herokuapp.com/",
};

const ProjectsBlockContainer = () => {
  return (
    <>
      <h1 className={styles.headingText}>Example Projects</h1>
      <section className={styles.projectsBlockContainer}>
        <ProjectCard props={thisSite} />
        <ProjectCard props={wealthToolCard} />
        <ProjectCard props={toDoListCard} />
      </section>
    </>
  );
};

export default ProjectsBlockContainer;
