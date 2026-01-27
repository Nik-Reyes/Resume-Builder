import InputField from "../../input/Input";
import GroupHeading from "./GroupHeading";

function InputGroup({
  groupStateObj,
  currentFormInputGroup,
  replicable,
  handleInputChange,
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
  return (
    <div
      className={`form-section ${replicable ? "replicable" : "irreplicable"}`}
    >
      {replicable && (
        <GroupHeading
          titleData={titleDataMap[formSection]}
          deleteGroup={handleDeleteGroup}
        />
      )}
      <>
        {currentFormInputGroup.map((input) => {
          return (
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
          );
        })}
      </>
    </div>
  );
}

export default InputGroup;
