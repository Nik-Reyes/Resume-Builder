import InputField from "../../input/Input";

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
      {replicable && (
        <button
          onClick={() => handleDeleteGroup(groupStateObj.id)}
          data-button-type="delete-group"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default InputGroup;
