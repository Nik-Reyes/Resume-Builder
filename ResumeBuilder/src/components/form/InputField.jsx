function InputField({ title, inputType, inputValue, onChange }) {
  let inputClass = null;
  const skill = "Skill";

  switch (title) {
    case "Start Date":
      inputClass = "input-control start-date";
      break;
    case "End Date":
      inputClass = "input-control end-date";
      break;
    case "Skill":
      inputClass = "input-control skill";
      break;
    default:
      inputClass = "input-control";
  }

  const input =
    inputType === "textarea" ? (
      <textarea
        id="form-input"
        className="form-input"
        placeholder=""
        value={inputValue}
        onChange={onChange}
      ></textarea>
    ) : (
      <input
        id="form-input"
        className="form-input"
        type={inputType}
        placeholder=""
        value={inputValue}
        onChange={onChange}
      />
    );

  return (
    <div className={inputClass}>
      <label htmlFor="form-input">
        {!title.includes(skill) && (
          <span className="form-input-title">{title}</span>
        )}
        {input}
      </label>
    </div>
  );
}

export default InputField;
