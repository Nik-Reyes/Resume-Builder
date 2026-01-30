import InputField from "../../input/Input.jsx";
import GroupHeading from "./GroupHeading.jsx";

function InputGroup({
  groupStateObj,
  currentFormInputGroup,
  replicable,
  handleInputChange,
  handleToggleGroup,
  hidden,
  formSection,
  handleDeleteGroup,
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
  };

  const inputGroup = currentFormInputGroup.map((input) => (
    <InputField
      key={input.name}
      title={input.title}
      inputType={input.type}
      inputValue={groupStateObj[input.name]}
      updateFunction={(e) =>
        handleInputChange({
          ...groupStateObj,
          [input.name]: e.target.value,
        })
      }
    />
  ));

  return replicable ? (
    <div className="replicable accordian">
      <div className="accordian-panel">
        <GroupHeading
          titleData={titleDataMap[formSection]}
          deleteGroup={handleDeleteGroup}
          toggleAccordian={() =>
            handleToggleGroup(formSection, groupStateObj.id)
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
