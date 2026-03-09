function Form({
  formName,
  formIsReplicable,
  formButtonName,
  onClick,
  children,
}) {
  return (
    <div className="form container">
      <div className="form-title-wrapper">
        <span className="form-title">{formName}</span>
        {formIsReplicable && (
          <button
            className="sharp-white"
            data-button-type="add-inputGroup"
            onClick={onClick}
          >
            + add {formButtonName}
          </button>
        )}
      </div>
      <div className="input-groups">{children}</div>
    </div>
  );
}

export default Form;
