function InputField({ title, inputType, inputValue, updateFunction }) {
  function getInputClass(title) {
    switch (title) {
      case "Start Date":
        return `input-control start-date ${title.toLowerCase()}`;
      case "End Date":
        return `input-control end-date ${title.toLowerCase()}`;
      default:
        return `input-control ${title.toLowerCase()}`;
    }
  }

  return (
    <div className={getInputClass(title)}>
      <label htmlFor="form-input">
        {title !== "Skill" && <span className="form-input-title">{title}</span>}
        {inputType === "textarea" ? (
          <textarea
            id="form-input"
            className="form-input"
            placeholder=""
            value={inputValue}
            onChange={updateFunction}
          ></textarea>
        ) : (
          <input
            id="form-input"
            className="form-input"
            type={inputType}
            placeholder=""
            value={inputValue}
            onChange={updateFunction}
          />
        )}
      </label>
    </div>
  );
}

export default InputField;
