function Form({ title, replicable, children }) {
  return (
    <div className="form">
      <div className="form-title-wrapper">
        <span className="form-title">{title}</span>
      </div>
      <div
        className={`form-section ${replicable ? "replicable" : "irreplicable"}`}
      >
        {children}
      </div>
      {replicable && <button>{`+ add ${title.toLowerCase()}`}</button>}
    </div>
  );
}

export default Form;
