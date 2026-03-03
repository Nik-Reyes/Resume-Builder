function InputField({ id, title, inputType, inputValue, onChange, onBlur }) {
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

  return (
    <div className={inputClass}>
      <label htmlFor={id}>
        {!title.includes(skill) && (
          <span className="form-input-title">{title}</span>
        )}
        {inputType === "textarea" ? (
          <textarea
            id={id}
            className="form-input"
            placeholder=""
            value={inputValue}
            onChange={onChange}
            onBlur={onBlur}
          ></textarea>
        ) : (
          <input
            id={id}
            className="form-input"
            type={inputType}
            placeholder=""
            value={inputValue}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      </label>
    </div>
  );
}

export default InputField;
