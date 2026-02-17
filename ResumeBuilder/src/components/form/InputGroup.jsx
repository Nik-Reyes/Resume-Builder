import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";

function InputGroup({
  groupStateObj,
  currentFormInputFields,
  formIsReplicable,
  handleToggleGroup,
  currentFormSection,
  updateFormGroup,
  handleDeleteGroup,
  isGroupHidden,
  groupKey,
  handleDeleteFromActiveGroups,
}) {
  const hidden = isGroupHidden(groupKey);
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
  const inputGroup = currentFormInputFields.map((field) => (
    <InputField
      key={field.name}
      title={field.title}
      inputType={field.type}
      inputValue={groupStateObj[field.name]} // uses the input config object name to access the state of the same name
      onChange={(e) => onInputChange(e, field)}
    />
  ));

  function onInputChange(e, field) {
    const updatedGroup = {
      ...groupStateObj,
      [field.name]: e.target.value,
    };
    updateFormGroup(updatedGroup);
  }

  return formIsReplicable ? (
    <div className="replicable accordian">
      <div className="accordian-panel">
        <GroupHeading
          titleData={titleDataMap[currentFormSection]}
          deleteGroup={() => handleDeleteGroup(groupStateObj.id)}
          deleteActiveGroup={() => handleDeleteFromActiveGroups(groupKey)}
          toggleAccordian={() => handleToggleGroup(groupKey)}
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
