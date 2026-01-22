import InputField from "../../input/Input";

function InputGroup({
  groupStateObj,
  inputConfig,
  replicable,
  handleInputChange,
}) {
  console.log(groupStateObj);
  return (
    <div
      className={`form-section ${replicable ? "replicable" : "irreplicable"}`}
    >
      {inputConfig.map((input) => {
        return (
          <InputField
            key={input.name}
            title={input.title}
            inputType={input.type}
            inputValue={groupStateObj[input.name]}
            updateFunction={(e) =>
              handleInputChange(e.target.value, groupStateObj.id, input.name)
            }
          />
        );
      })}
    </div>
  );
}

export default InputGroup;
