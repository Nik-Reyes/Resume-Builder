import ProgressBar from "./ProgressBar.jsx";

function Footer({ formNumber, totalForms, setFormNumber, manageView }) {
  const isLastForm = formNumber === totalForms;
  const prog =
    formNumber === 0
      ? 1 / (totalForms + 1)
      : (formNumber + 1) / (totalForms + 1);

  // ProgressFooter Handlers
  function incrementFormNumber() {
    if (formNumber >= totalForms) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  return (
    <div className="progress-footer container">
      <div className="spacer"></div>
      <div className="progress-content">
        <ProgressBar progPercent={prog} />
        <div className="progress-buttons-wrapper">
          <button
            className="progress-button sharp-white"
            onClick={() => decrementFormNumber()}
            disabled={formNumber >= 1 ? false : true}
          >
            <span>Previous</span>
          </button>
          <button
            className={
              isLastForm
                ? "progress-button disabled"
                : "progress-button sharp-white"
            }
            onClick={() => {
              if (isLastForm) {
                manageView("resume");
              }
              incrementFormNumber();
            }}
          >
            <span>{isLastForm ? "Finish" : "Next"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
