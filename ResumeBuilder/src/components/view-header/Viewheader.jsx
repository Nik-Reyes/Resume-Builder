function ViewHeader({ view, setView }) {
  // console.log(view);
  return (
    <div className="view-header">
      <button className="form-view" onClick={() => setView("form")}>
        Edit Form
      </button>
      <button className="resume-view" onClick={() => setView("resume")}>
        Preview Resume
      </button>
    </div>
  );
}

export default ViewHeader;
