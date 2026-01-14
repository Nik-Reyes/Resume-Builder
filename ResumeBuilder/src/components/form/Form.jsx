function Form({ formTitle, children }) {
  return (
    <div className="form">
      <div className="form-title">
        <h1>{formTitle}</h1>
      </div>
      {children}
    </div>
  );
}

export default Form;
