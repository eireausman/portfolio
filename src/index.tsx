import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomepageHeader from "./components/Header/HeaderBar";
import IntroBlock from "./components/IntroBlock/IntroBlock";
import SkillsBlockContainer from "./components/SkillsBlock/SkillsBlockContainer";
import ProjectsBlockContainer from "./components/ProjectsBlock/ProjectsBlockContainer";
import "./index.css";
import ParticlesBackground from "./ParticlesBackground";
import NameIntro from "./components/NameIntro/NameIntro";
import ScrollDownMessage from "./components/NameIntro/ScrollDownMessage";
import ReachOut from "./components/Header/ReachOut";

// var app = document.getElementById("app");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParticlesBackground />
    <NameIntro />
    <HomepageHeader />
    <div className="mainBG">
      <IntroBlock />
      <SkillsBlockContainer />
      <ProjectsBlockContainer />
    </div>
  </React.StrictMode>
);
