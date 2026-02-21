import InputField from "./InputField.jsx";
import GroupHeading from "./GroupHeading.jsx";

function DefaultInputGroup({
  groupStateObj,
  currentFormInputFields,
  formIsReplicable,
  toggleAccordion,
  updateFormGroup,
  handleDeleteGroup,
  isGroupHidden,
  groupKey,
  titleData,
  handleDeleteFromActiveGroups,
}) {
  const hidden = isGroupHidden(groupKey);

  function onInputChange(e, field) {
    const updatedGroup = {
      ...groupStateObj,
      [field.name]: e.target.value,
    };
    updateFormGroup(updatedGroup);
  }

  return formIsReplicable ? (
    <div className="replicable accordion container">
      <div className="accordion-panel">
        <GroupHeading
          titleData={titleData}
          deleteGroup={() => handleDeleteGroup(groupStateObj.id)}
          deleteActiveGroup={() => handleDeleteFromActiveGroups(groupKey)}
          toggleAccordion={() => toggleAccordion(groupKey)}
          hidden={hidden}
        />
        <div className="accordion-content-wrapper" aria-hidden={hidden}>
          <div className="accordion-content">
            {currentFormInputFields.map((field) => (
              <InputField
                key={field.name}
                title={field.title}
                inputType={field.type}
                inputValue={groupStateObj[field.name]} // uses the input config object name to access the state of the same name
                onChange={(e) => onInputChange(e, field)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="irreplicable">
      {currentFormInputFields.map((field) => (
        <InputField
          key={field.name}
          title={field.title}
          inputType={field.type}
          inputValue={groupStateObj[field.name]} // uses the input config object name to access the state of the same name
          onChange={(e) => onInputChange(e, field)}
        />
      ))}
    </div>
  );
}

export default DefaultInputGroup;
