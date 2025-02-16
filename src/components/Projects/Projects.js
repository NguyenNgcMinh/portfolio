import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import "./Projects.css";
import * as textConst from "../../const/text";
import Project from "./Project";

export default function Projects() {
  useEffect(() => {
    pageLoad();
    pageSetup();
  }, []);

  return (
    <div id="projects">
      <h1 id="projects_title">{textConst.PROJECTS_TITLE}</h1>
      <Project.DeFund />
      <Project.MusicRecommendationFromEmotion />
      <Project.LookAndEarn />
      {/* <Project.LonelyNoLonger />
      <Project.OnlineHateSpeechDetection />
      <Project.TransferConnect />
      <Project.Giglet />
      <Project.Wordle />
      <Project.FEAST />
      <Project.WillIGoBroke />
      <Project.PokemonBattle /> */}
    </div>
  );
}

function pageSetup() {
  document.getElementById("nav_projects").classList.add("selected");

  window.addEventListener("resize", projectSkillsResponsive);

  const projects = Array.from(document.getElementsByClassName("project"));
  projects.forEach((project) => {
    project.addEventListener("click", projectClick);
  });
}

function projectClick(event) {
  const project = this;
  const projectContent = project.children[1];
  const expandCollapse = project.children[2];

  if (
    event.target.classList.contains("expand_collapse") ||
    event.target.classList.contains("expand_collapse_icon")
  ) {
    if (projectContent.style.maxHeight) {
      expandCollapse.innerHTML =
        '<i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>\nView more';
      projectContent.classList.remove("expanded");
      projectContent.style.maxHeight = null;
    } else {
      expandCollapse.innerHTML =
        '<i class="fa solid fa-chevron-up fa-xl icon expand_collapse_icon"></i>\nView less';
      projectContent.classList.add("expanded");
      projectContent.style.maxHeight = projectContent.scrollHeight + "px";
    }
  }
}

function projectSkillsResponsive() {
  const expandedProjectContents = Array.from(
    document.getElementsByClassName("expanded")
  );
  expandedProjectContents.forEach((projectContent) => {
    projectContent.style.maxHeight = projectContent.scrollHeight + "px";
  });
}
