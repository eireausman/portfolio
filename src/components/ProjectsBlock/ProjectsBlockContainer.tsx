import React from "react";
import PetrolPricing from "./PetrolPricing";
import styles from "./ProjectsBlockContainer.module.css";
import ToDoList from "./ToDoList";
import WealthTool from "./WealthTool";

const ProjectsBlockContainer = () => {
  return (
    <section className={styles.projectsBlockContainer}>
      <WealthTool />
      <ToDoList />
      <PetrolPricing />
    </section>
  );
};

export default ProjectsBlockContainer;
