function Form({ title, replicable, addSubSection, children }) {
  return (
    <div className="form">
      <div className="form-title-wrapper">
        <span className="form-title">{title}</span>
      </div>
      {children}
      {replicable && (
        <button onClick={addSubSection}>+ add {title.toLowerCase()}</button>
      )}
    </div>
  );
}

export default Form;
