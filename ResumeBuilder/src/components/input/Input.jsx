function InputField({ title }) {
  return (
    <div className="input-control">
      <label htmlFor="form-input">
        <span className="form-input-title">{title}</span>{" "}
        <input id="form-input" type="text" placeholder="" />
      </label>
    </div>
  );
}

export default InputField;
