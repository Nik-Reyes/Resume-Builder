function Header({ view, setView }) {
  function manageView(newView) {
    const updateView = { ...view };
    Object.keys(updateView).forEach((key) => (updateView[key] = false));
    updateView[newView] = true;
    setView(updateView);
  }

  return (
    <div className="view-header">
      <button className="form-view" onClick={() => manageView("form")}>
        Edit Form
      </button>
      <button className="resume-view" onClick={() => manageView("resume")}>
        Preview Resume
      </button>
    </div>
  );
}

export default Header;
