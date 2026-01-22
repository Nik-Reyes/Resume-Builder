import InputField from "../../input/Input";

function FormSection({
  replicable,
  groupedDataIdx,
  inputGroup,
  inputFields,
  handleInputChange,
}) {
  return (
    <div
      className={`form-section ${replicable ? "replicable" : "irreplicable"}`}
    >
      {inputFields.map((input) => {
        return (
          <InputField
            key={input.name}
            title={input.title}
            inputType={input.type}
            inputValue={inputGroup[input.name]}
            updateFunction={(e) =>
              handleInputChange(e, groupedDataIdx, input.name)
            }
          />
        );
      })}
    </div>
  );
}

export default FormSection;
