import React from "react";
import * as textConst from "../../const/text";
import Icon from "../../const/icons";

const Languages = () => {
  return (
    <div id="languages" class="skill_section">
      <Icon.SkillsHeading skillType="languages" />
      <p>
        <SkillAndProficiency
          type="languages"
          skill="english"
          proficiency="spoken_written"
        />
      </p>
    </div>
  );
};

const ProgrammingLanguages = () => {
  return (
    <div id="programming_languages" class="skill_section">
      <Icon.SkillsHeading skillType="programming_languages" />
      <p>
        <SkillAndProficiency
          type="programming_languages"
          skill="html"
          proficiency="intermediate"
        />
         <SkillAndProficiency
          type="programming_languages"
          skill="css"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="typescript"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="javascript"
          proficiency="intermediate"
        />
       
        <SkillAndProficiency
          type="programming_languages"
          skill="php"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="mysql"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="node"
          proficiency="intermediate"
        />
      </p>
    </div>
  );
};

const Frameworks = () => {
  return (
    <div id="frameworks" class="skill_section">
      <Icon.SkillsHeading skillType="frameworks" />
      <div class="d-flex row">
        <div id="frontend" class="sub_skill col-sm-4">
          <Icon.SkillSubHeading skillType="frontend" />
          <p>
            <SkillAndProficiency
              type="frameworks"
              skill="next"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="react"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="html"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="css"
              proficiency="intermediate"
            />
           
          </p>
        </div>
        <div id="backend" class="sub_skill col-sm-4">
          <Icon.SkillSubHeading skillType="backend" />
          <p>
            <SkillAndProficiency
              type="frameworks"
              skill="mysql"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="php"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="node"
              proficiency="intermediate"
            />
          </p>
        </div>
       
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div id="tools" class="skill_section">
      <Icon.SkillsHeading skillType="tools" />
      <p>
        <SkillAndProficiency
          type="frameworks"
          skill="github"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="vscode"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="figma"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="postman"
          proficiency="intermediate"
        />
       
      </p>
    </div>
  );
};
const SkillAndProficiency = ({ type, skill, proficiency }) => {
  let proficiencyLevel;
  let icon;

  // Xử lý proficiency với default case
  switch (proficiency) {
    case 'spoken_written':
      proficiencyLevel = textConst.SKILLS_LANGUAGES_SPOKEN_WRITTEN;
      break;
    case 'proficient':
      proficiencyLevel = textConst.SKILLS_PROFICIENCY_PROFICIENT;
      break;
    case 'intermediate':
      proficiencyLevel = textConst.SKILLS_PROFICIENCY_INTERMEDIATE;
      break;
    case 'beginner':
      proficiencyLevel = textConst.SKILLS_PROFICIENCY_BEGINNER;
      break;
    default:
      proficiencyLevel = 'Không xác định'; // Tránh cảnh báo ESLint
  }

  // Xử lý icon với default case
  switch (type) {
    case 'languages':
      icon = <Icon.SkillLanguage languageName={skill} />;
      break;
    case 'programming_languages':
    case 'frameworks':
    case 'tools':
      icon = <Icon.HardSkill skillName={skill} />;
      break;
    default:
      icon = <Icon.DefaultIcon />; // Đảm bảo không bị thiếu trường hợp
  }

  return (
    <div className="skill">
      {icon} <span className="proficiency_level">{proficiencyLevel}</span>
      <br />
    </div>
  );
};

const Skill = {
  Languages,
  ProgrammingLanguages,
  Frameworks,
  Tools,
};

export default Skill;
