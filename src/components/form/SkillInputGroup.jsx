// development in progess, not the final product
import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";
import Category from "./Category.jsx";

function SkillInputGroup({
  groupStateObj,
  currentFormInputFields,
  toggleAccordion,
  isGroupHidden,
  updateFormGroup,
  groupKey,
  handleDeleteGroup,
  handleDeleteFromActiveGroups,
  handleOnBlur,
}) {
  const [catConfig, skillConfig] = currentFormInputFields;
  const skillItemsState = groupStateObj.skills;
  const skillCat = groupStateObj[catConfig.name];
  const isCategoryHidden = isGroupHidden(groupKey);

  function onSkillInputChange(e, skillToUpdate) {
    const currentInputVal = e.target.value;
    const updatedGroup = {
      ...groupStateObj,
      skills: skillItemsState.map((skill) =>
        skill.id === skillToUpdate.id
          ? { ...skill, skill: currentInputVal }
          : skill
      ),
    };
    updateFormGroup(updatedGroup);
  }

  function onBlur(e, skillToUpdate) {
    const currentInputVal = e.target.value.trim();

    const updatedGroup = {
      ...groupStateObj,
      skills: skillItemsState.map((skill) =>
        skill.id === skillToUpdate.id
          ? { ...skill, skill: currentInputVal }
          : skill
      ),
    };
    handleOnBlur(updatedGroup);
  }

  function addSkill() {
    // generate the new skill
    const newSkill = { id: crypto.randomUUID(), [skillConfig.name]: "" };

    // add the new skill to the category
    const updatedCategory = {
      ...groupStateObj,
      skills: [...skillItemsState, newSkill],
    };

    updateFormGroup(updatedCategory);
  }

  function deleteSkill(id) {
    const updatedCategory = {
      ...groupStateObj,
      skills: skillItemsState.filter((skill) => skill.id !== id),
    };

    updateFormGroup(updatedCategory);
  }

  return (
    <div className="skill-category-wrapper container">
      <div className="accordion">
        <div className="accordion-panel">
          <GroupHeading
            titleData={{
              title: skillCat,
              titlePlaceholder: "Category",
            }}
            deleteGroup={() => handleDeleteGroup(groupStateObj.id)}
            toggleAccordion={() => toggleAccordion(groupKey)}
            deleteActiveGroup={() => handleDeleteFromActiveGroups(groupKey)}
            hidden={isCategoryHidden}
          >
            <Category
              placeholder={"i.e., Languages"}
              onChange={(e) =>
                updateFormGroup({
                  ...groupStateObj,
                  [catConfig.name]: e.target.value,
                })
              }
              value={skillCat}
            />
          </GroupHeading>
          <div
            className="accordion-content-wrapper"
            aria-hidden={isCategoryHidden}
          >
            <div className="accordion-content">
              <div className="skills-wrapper">
                {skillItemsState.map((skillObj) => {
                  const skillKey = skillObj.id;
                  const isSkillHidden = isGroupHidden(skillKey);
                  return (
                    <div
                      className="replicable accordion container"
                      key={skillObj.id}
                    >
                      <div className="accordion-panel">
                        <GroupHeading
                          titleData={{
                            title: skillObj.skill,
                            titlePlaceholder: "Skill",
                          }}
                          deleteGroup={() => deleteSkill(skillObj.id, skillKey)}
                          toggleAccordion={() => toggleAccordion(skillKey)}
                          deleteActiveGroup={() =>
                            handleDeleteFromActiveGroups(skillKey)
                          }
                          hidden={isSkillHidden}
                        />
                        <div
                          className="accordion-content-wrapper"
                          aria-hidden={isSkillHidden}
                        >
                          <div className="accordion-content">
                            <InputField
                              id={skillObj.id}
                              title={skillConfig.title}
                              inputType={skillConfig.type}
                              inputValue={skillObj.skill}
                              onChange={(e) => onSkillInputChange(e, skillObj)}
                              onBlur={(e) => onBlur(e, skillObj)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* ========Skill accordion group jsx======== */}
              <div className="skill-button-wrapper">
                <button
                  className="add-skill br-tlr"
                  data-button-type="add-skill"
                  onClick={addSkill}
                >
                  <span>+ add skill</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillInputGroup;
