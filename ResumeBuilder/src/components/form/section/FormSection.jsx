import { useState } from "react";
import InputField from "../../input/Input";
import GroupHeading from "./GroupHeading";

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

  return (
    <div
      className={`${replicable ? "accordian" : ""} form-section ${
        replicable ? "replicable" : "irreplicable"
      }`}
    >
      <div className="accordian-panel">
        {replicable && (
          <GroupHeading
            titleData={titleDataMap[formSection]}
            deleteGroup={handleDeleteGroup}
            toggleAccordian={() =>
              handleToggleGroup(formSection, groupStateObj.id)
            }
            hidden={hidden}
          />
        )}
        <div
          className={replicable ? "accordian-content" : ""}
          aria-hidden={replicable ? hidden : ""}
        >
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputGroup;
