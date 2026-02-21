import ProgressBar from "./ProgressBar.jsx";

function Footer({ formNumber, totalForms, setFormNumber }) {
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
            className="progress-button"
            onClick={() => decrementFormNumber()}
            disabled={formNumber >= 1 ? false : true}
          >
            Previous
          </button>
          <button
            className="progress-button"
            onClick={() => incrementFormNumber()}
            disabled={formNumber >= totalForms ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
