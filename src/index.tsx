import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomepageHeader from "./components/Header/HeaderBar";
import MainBlock from "./components/IntroBlock/IntroBlock";
import SkillsBlockContainer from "./components/SkillsBlock/SkillsBlockContainer";
import ProjectsBlockContainer from "./components/ProjectsBlock/ProjectsBlockContainer";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomepageHeader />
    <MainBlock />
    <SkillsBlockContainer />
    <ProjectsBlockContainer />
  </React.StrictMode>
);
