// development in progess, not the final product
import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";

function SkillGroup({
  groupStateObj,
  currentFormInputFields,
  handleDeleteGroup,
  handleToggleGroup,
  isGroupHidden,
  handleInputChange,
  isCategoryHidden,
  currentFormSection,
}) {
  const [catConfig, skillConfig] = currentFormInputFields;
  const skillItemsState = groupStateObj.skills;
  const skillCat = groupStateObj.category;

  function onSkillChange(e, skillToUpdate) {
    const newVal = e.target.value;
    const updatedGroup = {
      ...groupStateObj,
      skills: skillItemsState.map((skill) =>
        skill.id === skillToUpdate.id ? { ...skill, skill: newVal } : skill
      ),
    };
    handleInputChange(updatedGroup);
  }

  return (
    <div className="skill-category-wrapper">
      <div className="skill-type">
        <input
          placeholder={skillCat || "i.e., Languages"}
          onChange={(e) =>
            handleInputChange({ ...groupStateObj, category: e.target.value })
          }
        ></input>
      </div>

      <div className="skills-wrapper">
        {skillItemsState.map((skillObj) => {
          const skillKey = `${currentFormSection}-${groupStateObj.id}-${skillObj.id}`;
          const isSkillHidden = isGroupHidden(skillKey);

          return (
            <div
              className="replicable accordian"
              key={`skill-item=${skillObj.id}`}
            >
              <div className="accordian-panel">
                <GroupHeading
                  titleData={{
                    title: skillObj.skill,
                    titlePlaceholder: "Skill",
                  }}
                  deleteGroup={handleDeleteGroup}
                  toggleAccordian={() => handleToggleGroup(skillKey)}
                  hidden={isSkillHidden}
                />
                <div className="accordian-content" aria-hidden={isSkillHidden}>
                  <div>
                    <InputField
                      title={skillConfig.title}
                      inputType={skillConfig.type}
                      inputValue={skillObj.skill}
                      onChange={(e) => onSkillChange(e, skillObj)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* ========Skill accordian group jsx======== */}

      <button data-button-type="add-skill">
        <span>+ add skill</span>
      </button>
    </div>
  );
}

export default SkillGroup;
