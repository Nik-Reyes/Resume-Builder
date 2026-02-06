import ProgressBar from "../progress-bar/ProgressBar.jsx";

function ProgressFooter({
  progress,
  totalForms,
  advanceProgress,
  regressProgress,
}) {
  const prog =
    progress === 0 ? 1 / (totalForms + 1) : (progress + 1) / (totalForms + 1);

  return (
    <div className="progress-footer">
      <div className="spacer"></div>

      <div className="progress-content">
        <ProgressBar progPercent={prog} />
        <div className="progress-buttons-wrapper">
          <button
            className="progress-button"
            onClick={() => regressProgress()}
            disabled={progress >= 1 ? false : true}
          >
            Previous
          </button>
          <button
            className="progress-button"
            onClick={() => advanceProgress()}
            disabled={progress >= totalForms ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressFooter;
