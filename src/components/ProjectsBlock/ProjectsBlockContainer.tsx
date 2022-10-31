import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsBlockContainer.module.css";
import wealthToolImg from "../../assets/images/wealthTool.png";

const wealthToolCard = {
  title: "Net Wealth Tracker",
  descript:
    "A tool to manage your whole net wealth, including multi-currency assets and multiple global markets.",
  projectImg: wealthToolImg,
  gitHubAddress: "https://github.com/eireausman/wealth-tool",
  projectURL: "https://www.wealthtool.eireausman.com/",
};

const toDoListCard = {
  title: "To Do List",
  descript: "A classic skills project: To Do List",
  projectImg: wealthToolImg,
  gitHubAddress: "https://github.com/eireausman/wealth-tool",
  projectURL: "https://eireausman-todolist.herokuapp.com/",
};

const ProjectsBlockContainer = () => {
  return (
    <>
      <h1>Projects</h1>
      <section className={styles.projectsBlockContainer}>
        <ProjectCard props={wealthToolCard}></ProjectCard>
        <ProjectCard props={wealthToolCard}></ProjectCard>
        <ProjectCard props={wealthToolCard}></ProjectCard>
      </section>
    </>
  );
};

export default ProjectsBlockContainer;
