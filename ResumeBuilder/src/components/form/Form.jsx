function Form({ title, formIsReplicable, addFormGroup, children }) {
  return (
    <div className="form">
      <div className="form-title-wrapper">
        <span className="form-title">{title}</span>
        {formIsReplicable && (
          <button data-button-type="add-inputGroup" onClick={addFormGroup}>
            + add {title.toLowerCase()}
          </button>
        )}
      </div>
      <div className="input-groups">{children}</div>
    </div>
  );
}

export default Form;
