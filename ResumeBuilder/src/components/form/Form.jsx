function Form({ formTitle, children }) {
  return (
    <div className="form">
      <div className="form-title-wrapper">
        <span className="form-title">{formTitle}</span>
      </div>
      {children}
    </div>
  );
}

export default Form;
