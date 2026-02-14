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

  function onInputChange(e) {
    const newVal = e.target.value;

    console.log(newVal);
    // const updatedGroup = {
    //   ...groupStateObj,
    //   [input.name]: newVal,
    // };
    // handleInputChange(updatedGroup);
  }

  return (
    <div className="skill-wrapper">
      <div className="skill-type">
        <input
          placeholder={groupStateObj.category || "i.e., Languages"}
        ></input>
      </div>
      <div className="skill-group">
        <div className="replicable accordian">
          <div className="accordian-panel">
            <GroupHeading
              titleData={{
                title: groupStateObj.skill,
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
                  inputValue={"stuff"}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillGroup;
