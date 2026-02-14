function ProgressBar({ progPercent }) {
  const hundredthAdjustedProg = parseInt(progPercent * 100);
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-header">
        <div className="progress-title">Progress</div>
        <div className="progress-percent">{hundredthAdjustedProg}%</div>
      </div>
      <progress
        max={100}
        value={hundredthAdjustedProg}
        className="progressbar"
      ></progress>
    </div>
  );
}

export default ProgressBar;
