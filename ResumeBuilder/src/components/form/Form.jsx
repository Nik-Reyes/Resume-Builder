function Form({ title, replicable, addInputGroup, children }) {
  return (
    <div className="form">
      <div className="form-title-wrapper">
        <span className="form-title">{title}</span>
        {replicable && (
          <button data-button-type="add-inputGroup" onClick={addInputGroup}>
            + add {title.toLowerCase()}
          </button>
        )}
      </div>
      <div className="input-groups">{children}</div>
    </div>
  );
}

export default Form;
