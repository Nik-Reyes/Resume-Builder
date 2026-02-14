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
    projects: {
      title: groupStateObj.projectTitle,
      titlePlaceholder: "Project",
    },
  };

  // uses config to create the input tags
  const inputGroup = currentFormInputGroup.map((input) => (
    <InputField
      key={input.name}
      title={input.title}
      inputType={input.type}
      inputValue={groupStateObj[input.name]} // uses the input config object name to access the state of the same name
      onChange={(e) => onInputChange(input, e)}
    />
  ));

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
          <div>{inputGroup}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="irreplicable">{inputGroup}</div>
  );
}

export default InputGroup;
