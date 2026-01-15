function ProgressFooter({ progress, advanceProgress, regressProgress }) {
  return (
    <div className="progress-footer">
      <div className="progress-indicator-wrapper">
        <button>Hi</button>
      </div>
      <div className="progress-buttons-wrapper">
        {progress >= 1 && (
          <button className="progress-button" onClick={() => regressProgress()}>
            Previous
          </button>
        )}
        <button className="progress-button" onClick={() => advanceProgress()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ProgressFooter;
