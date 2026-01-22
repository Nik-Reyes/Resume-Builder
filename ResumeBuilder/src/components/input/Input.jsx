function InputField({ title, inputType, inputValue, updateFunction }) {
  function getInputClass(title) {
    switch (title) {
      case "Start Date":
        return "input-control start-date";
      case "End Date":
        return "input-control end-date";
      default:
        return "input-control";
    }
  }
  return (
    <div className={getInputClass(title)}>
      <label htmlFor="form-input">
        <span className="form-input-title">{title}</span>{" "}
        <input
          id="form-input"
          type={inputType}
          placeholder=""
          value={inputValue}
          onChange={updateFunction}
        />
      </label>
    </div>
  );
}

export default InputField;
