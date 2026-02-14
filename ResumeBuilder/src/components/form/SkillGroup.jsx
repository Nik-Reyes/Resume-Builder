// development in progess, not the final product
import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";

function SkillGroup({
  groupStateObj,
  currentFormInputGroup,
  handleDeleteGroup,
  handleToggleGroup,
  handleInputChange,
  hidden,
}) {
  const { name, title, type } = currentFormInputGroup.input;
  const skills = groupStateObj.skillItems;

  function onInputChange(e, skillToUpdate) {
    const newVal = e.target.value;
    const updatedGroup = {
      ...groupStateObj,
      skillItems: skills.map((skill) =>
        skill.id === skillToUpdate.id ? { ...skill, skill: newVal } : skill
      ),
    };
    handleInputChange(updatedGroup);
  }

  return (
    <div className="skill-category-wrapper">
      <div className="skill-type">
        <input
          placeholder={groupStateObj.category || "i.e., Languages"}
        ></input>
      </div>
      {/* for each skill-category-wrapper there are n replicable accordian */}
      <div className="skills-wrapper">
        {skills.map((skillObj) => {
          return (
            <div
              className="replicable accordian"
              key={`skill-item=${skillObj.id}`}
            >
              <div className="accordian-panel">
                <GroupHeading
                  titleData={{
                    title: skillObj[name],
                    titlePlaceholder: "Skill",
                  }}
                  deleteGroup={handleDeleteGroup}
                  toggleAccordian={() =>
                    handleToggleGroup(currentFormSection, groupStateObj.id)
                  }
                  hidden={hidden}
                />
                <div className="accordian-content" aria-hidden={hidden}>
                  <div>
                    <InputField
                      title={title}
                      inputType={type}
                      inputValue={skillObj[name]}
                      onChange={(e) => onInputChange(e, skillObj)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillGroup;
