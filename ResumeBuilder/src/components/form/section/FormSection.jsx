import { useState } from "react";
import InputField from "../../input/Input";
import GroupHeading from "./GroupHeading";

function InputGroup({
  groupStateObj,
  inputConfig,
  replicable,
  handleInputChange,
  handleDeleteGroup,
}) {
  return (
    <div
      className={`form-section ${replicable ? "replicable" : "irreplicable"}`}
    >
      {replicable && <GroupHeading deleteGroup={handleDeleteGroup} />}
      <>
        {inputConfig.map((input) => {
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
