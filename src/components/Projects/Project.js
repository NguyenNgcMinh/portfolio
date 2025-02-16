import React from "react";
import Icon from "../../const/icons";
import * as textConst from "../../const/text";
const DeFund = () => {
  return (
    <div id="defund" class="project">
      <div class="project_title_and_info d-flex row">
        <h3>
          <u>{textConst.PROJECTS_DEFUND_TITLE}</u>
        </h3>
        {/* <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
          <img
            src={defund_picture}
            loading="lazy"
            alt=""
            id="defund_picture"
            class="project_logo"
          ></img>
        </div> */}
        <div class="info text-center d-flex align-items-center justify-content-center">
        <h6>
            <Icon.ProjectIcon
              iconName="project_role"
              labelText={textConst.PROJECTS_DEFUND_ROLE}
            />
            <br />
            <Icon.ProjectIcon
              iconName="project_type"
              labelText={textConst.PROJECTS_DEFUND_TYPE}
            />
            <br />
            <Icon.ProjectIcon
              iconName="project_timeline"
              labelText={textConst.PROJECTS_DEFUND_TIMELINE}
            />
            <br />
          </h6>
        </div>
      </div>
      <div class="project_content">
        <p class="text-start project_description">
          {textConst.PROJECTS_DEFUND_PROJECT_DESCRIPTION}
        </p>
        {/* <div class="project_extras d-flex row">
          <Icon.ProjectGitHub projectName="defund" />
        </div> */}
        <div class="skills">
          <h5 class="skills_title text-center">
            {textConst.PROJECTS_SKILLS_LABEL}
          </h5>
          <p class="text-center">
            <div class="hard_skills">
              <Icon.HardSkill skillName="html" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="css" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="javascript" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              {/* <Icon.HardSkill skillName="ethereum" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="github" /> */}
            </div>
            {/* <div class="soft_skills">
              <Icon.SoftSkill skillName="communication" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.SoftSkill skillName="researching" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.SoftSkill skillName="detail" />
            </div> */}
          </p>
        </div>
      </div>
      <Icon.ExapndCollapseIcon type="expand" />
    </div>
  );
};

const MusicRecommendationFromEmotion = () => {
  return (
    <div id="music_recommendation" class="project">
      <div class="project_title_and_info">
        <h3>
          <u>{textConst.PROJECTS_MUSIC_RECOMMENDATION_TITLE}</u>
        </h3>
        <div class="info text-center d-flex align-items-center justify-content-center">
          <h6>
            <Icon.ProjectIcon
              iconName="project_role"
              labelText={textConst.PROJECTS_MUSIC_RECOMMENDATION_ROLE}
            />
            <br />
            <Icon.ProjectIcon
              iconName="project_type"
              labelText={textConst.PROJECTS_MUSIC_RECOMMENDATION_TYPE}
            />
            <br />
            <Icon.ProjectIcon
              iconName="project_timeline"
              labelText={textConst.PROJECTS_MUSIC_RECOMMENDATION_TIMELINE}
            />
            <br />
          </h6>
        </div>
      </div>
      <div class="project_content">
        <p class="text-start project_description">
          {textConst.PROJECTS_MUSIC_RECOMMENDATION_PROJECT_DESCRIPTION}
        </p>
        <div class="project_extras d-flex row">
          <Icon.ProjectGitHub projectName="music_recommendation" />
        </div>
        <div class="skills">
          <h5 class="skills_title text-center">
            {textConst.PROJECTS_SKILLS_LABEL}
          </h5>
          <p class="text-center">
            <div class="hard_skills">
              <Icon.HardSkill skillName="html" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="css" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="php" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="mysql" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="github" />
            </div>
            {/* <div class="soft_skills">
              <Icon.SoftSkill skillName="communication" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.SoftSkill skillName="researching" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.SoftSkill skillName="detail" />
            </div> */}
          </p>
        </div>
      </div>
      <Icon.ExapndCollapseIcon type="expand" />
    </div>
  );
};

const LookAndEarn = () => {
  return (
    <div id="look_and_earn" class="project">
      <div class="project_title_and_info">
        <h3>
          <u>{textConst.PROJECTS_LOOK_AND_EARN_TITLE}</u>
        </h3>
        <div class="info text-center d-flex align-items-center justify-content-center">
          <h6>
            <Icon.ProjectIcon
              iconName="project_role"
              labelText={textConst.PROJECTS_LOOK_AND_EARN_ROLE}
            />
            <br />
            <Icon.ProjectIcon
              iconName="project_type"
              labelText={textConst.PROJECTS_LOOK_AND_EARN_PROJECT_TYPE}
            />
            <br />
            <Icon.ProjectIcon
              iconName="project_timeline"
              labelText={textConst.PROJECTS_LOOK_AND_EARN_TIMELINE}
            />
            <br />
          </h6>
        </div>
      </div>
      <div class="project_content">
        <p class="text-start project_description">
          {textConst.PROJECTS_LOOK_AND_EARN_PROJECT_DESCRIPTION}
        </p>
        <div class="project_extras d-flex row">
          <Icon.ProjectGitHub projectName="wellcare" />
        </div>
        <div class="skills">
          <h5 class="skills_title text-center">
            {textConst.PROJECTS_SKILLS_LABEL}
          </h5>
          <p class="text-center">
            <div class="hard_skills">
              <Icon.HardSkill skillName="html" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="css" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              {/* <Icon.HardSkill skillName="mysql" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="firestore" />
              &nbsp;&nbsp;&nbsp;&nbsp; */}
              <Icon.HardSkill skillName="javascript" />
              <br />
              <Icon.HardSkill skillName="react" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="node" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="php" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="mysql" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.HardSkill skillName="github" />
            </div>
            {/* <div class="soft_skills">
              <Icon.SoftSkill skillName="communication" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.SoftSkill skillName="researching" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon.SoftSkill skillName="detail" />
            </div> */}
          </p>
        </div>
      </div>
      <Icon.ExapndCollapseIcon type="expand" />
    </div>
  );
};


const Project = {
  DeFund,
  MusicRecommendationFromEmotion,
  LookAndEarn,
};

export default Project;
