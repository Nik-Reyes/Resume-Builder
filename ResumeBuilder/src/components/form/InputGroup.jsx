import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";

function InputGroup({
  groupStateObj,
  currentFormInputGroup,
  formIsReplicable,
  handleToggleGroup,
  currentFormSection,
  handleInputChange,
  handleDeleteGroup,
  hidden,
}) {
  const titleDataMap = {
    workExperience: {
      title: groupStateObj.jobTitle,
      subTitle: groupStateObj.employer,
      titlePlaceholder: "Job Title",
      subTitlePlaceholder: "Employer",
    },
    education: {
      title: groupStateObj.degree,
      subTitle: groupStateObj.university,
      titlePlaceholder: "Degree",
      subTitlePlaceholder: "University",
    },
    skills: {
      title: groupStateObj.skill,
      titlePlaceholder: "Skill",
    },
    projects: {
      title: groupStateObj.projectTitle,
      titlePlaceholder: "Project",
    },
  };

  function onInputChange(input, e) {
    const newVal = e.target.value;
    const updatedGroup = {
      ...groupStateObj,
      [input.name]: newVal,
    };
    handleInputChange(updatedGroup);
  }

  return formIsReplicable ? (
    <div className="replicable accordian">
      <div className="accordian-panel">
        <GroupHeading
          titleData={titleDataMap[currentFormSection]}
          deleteGroup={handleDeleteGroup}
          toggleAccordian={() =>
            handleToggleGroup(currentFormSection, groupStateObj.id)
          }
          hidden={hidden}
        />
        <div className="accordian-content" aria-hidden={hidden}>
          <div>
            {currentFormInputGroup.map((input) => (
              <InputField
                key={input.name}
                title={input.title}
                inputType={input.type}
                inputValue={groupStateObj[input.name]}
                onChange={(e) => onInputChange(input, e)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="irreplicable">{inputGroup}</div>
  );
}

export default InputGroup;
