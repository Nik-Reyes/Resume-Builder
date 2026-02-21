// development in progess, not the final product
import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";
import Category from "./Category.jsx";

function SkillInputGroup({
  groupStateObj,
  currentFormInputFields,
  handleToggleGroup,
  isGroupHidden,
  updateFormGroup,
  groupKey,
  handleDeleteGroup,
  handleDeleteFromActiveGroups,
}) {
  const [catConfig, skillConfig] = currentFormInputFields;
  const skillItemsState = groupStateObj.skills;
  const skillCat = groupStateObj[catConfig.name];
  const isCategoryHidden = isGroupHidden(groupKey);

  function onSkillInputChange(e, skillToUpdate) {
    const newVal = e.target.value;
    const updatedGroup = {
      ...groupStateObj,
      skills: skillItemsState.map((skill) =>
        skill.id === skillToUpdate.id ? { ...skill, skill: newVal } : skill
      ),
    };
    updateFormGroup(updatedGroup);
  }

  function addSkill() {
    // determines the nest highest skill id. If no skill exists, start at 0
    const nextSkillId =
      skillItemsState.length > 0
        ? Math.max(...skillItemsState.map((skill) => skill.id)) + 1
        : 0;

    // generate the new skill
    const newSkill = { id: nextSkillId, [skillConfig.name]: "" };

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
      <div className="accordian">
        <div className="accordian-panel">
          <GroupHeading
            titleData={{
              title: skillCat,
              titlePlaceholder: "Category",
            }}
            deleteGroup={() => handleDeleteGroup(groupStateObj.id)}
            toggleAccordian={() => handleToggleGroup(groupKey)}
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
            className="accordian-content-wrapper"
            aria-hidden={isCategoryHidden}
          >
            <div className="accordian-content">
              <div className="skills-wrapper">
                {skillItemsState.map((skillObj) => {
                  const skillKey = `${groupKey}-${skillObj.id}`;
                  const isSkillHidden = isGroupHidden(skillKey);
                  return (
                    <div
                      className="replicable accordian container"
                      key={`skill-item-${skillObj.id}`}
                    >
                      <div className="accordian-panel">
                        <GroupHeading
                          titleData={{
                            title: skillObj.skill,
                            titlePlaceholder: "Skill",
                          }}
                          deleteGroup={() => deleteSkill(skillObj.id, skillKey)}
                          toggleAccordian={() => handleToggleGroup(skillKey)}
                          deleteActiveGroup={() =>
                            handleDeleteFromActiveGroups(skillKey)
                          }
                          hidden={isSkillHidden}
                        />
                        <div
                          className="accordian-content-wrapper"
                          aria-hidden={isSkillHidden}
                        >
                          <div className="accordian-content">
                            <InputField
                              title={skillConfig.title}
                              inputType={skillConfig.type}
                              inputValue={skillObj.skill}
                              onChange={(e) => onSkillInputChange(e, skillObj)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* ========Skill accordian group jsx======== */}
              <button data-button-type="add-skill" onClick={addSkill}>
                <span>+ add skill</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillInputGroup;
