// development in progess, not the final product
import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";

function SkillGroup({
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
  const skillCat = groupStateObj.category;
  const isCategoryHidden = isGroupHidden(groupKey);

  function onInputChange(e, skillToUpdate) {
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
    <div className="accordian">
      <div className="accordin-panel">
        <GroupHeading
          titleData={{
            title: skillCat,
            titlePlaceholder: "Category",
          }}
          deleteGroup={() => handleDeleteGroup(groupStateObj.id)}
          toggleAccordian={() => handleToggleGroup(groupKey)}
          deleteActiveGroup={() => handleDeleteFromActiveGroups(groupKey)}
          hidden={isCategoryHidden}
        />
        <div className="accordian-content" aria-hidden={isCategoryHidden}>
          <div>
            <div className="skill-category-wrapper">
              <div className="skill-type">
                {/* implement click to edit component instead input/cat elements */}
                {/* <span className="category-title" onClick={() => console.log("hello")}>
          {groupStateObj[catConfig.name]}
        </span> */}
                <input
                  placeholder={skillCat || "i.e., Languages"}
                  onChange={(e) =>
                    updateFormGroup({
                      ...groupStateObj,
                      category: e.target.value,
                    })
                  }
                ></input>
              </div>

              <div className="skills-wrapper">
                {skillItemsState.map((skillObj) => {
                  const skillKey = `${groupKey}-${skillObj.id}`;
                  const isSkillHidden = isGroupHidden(skillKey);

                  return (
                    <div
                      className="replicable accordian"
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
                          className="accordian-content"
                          aria-hidden={isSkillHidden}
                        >
                          <div>
                            <InputField
                              title={skillConfig.title}
                              inputType={skillConfig.type}
                              inputValue={skillObj.skill}
                              onChange={(e) => onInputChange(e, skillObj)}
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

export default SkillGroup;
