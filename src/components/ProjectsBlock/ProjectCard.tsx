import React from "react";
import styles from "./ProjectCard.module.css";

interface ProjectsBlockContainerProps {
  props: {
    id: number;
    title: string;
    descript: string;
    projectImg: string;
    gitHubAddress: string;
    projectURL: string;
  };
}

const ProjectCard: React.FC<ProjectsBlockContainerProps> = ({ props }) => {
  return (
    <div className={styles.containerBlock}>
      <div>
        <img
          src={props.projectImg}
          alt={`Example page from ${props.title} project`}
          width={300}
          className={styles.projectImg}
        />

        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.descript}>{props.descript}</p>
      </div>

      <div className={styles.outBoundLinks}>
        <a
          className={styles.buttonOutbound}
          href={props.gitHubAddress}
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
        {props.projectURL !== "" && (
          <a
            className={styles.buttonOutbound}
            href={props.projectURL}
            rel="noreferrer"
            target="_blank"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
