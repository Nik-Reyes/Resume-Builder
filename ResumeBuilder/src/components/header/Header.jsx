function Header({ view, manageView }) {
  return (
    <div className="view-header container">
      <button
        className={
          view.form ? "form-view sharp-white" : "form-view sharp-white inactive"
        }
        onClick={() => manageView("form")}
      >
        <span>Edit Form</span>
      </button>
      <button
        className={
          view.form
            ? "resume-view sharp-white inactive"
            : "resume-view sharp-white"
        }
        onClick={() => manageView("resume")}
      >
        <span>Preview Resume</span>
      </button>
    </div>
  );
}

export default Header;
