function Form({ children }) {
  return (
    <form className="personal-details-form">
      <div className="form-title">
        <h1>Personal Details</h1>
      </div>
      {children}
    </form>
  );
}

export default Form;
