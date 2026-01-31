function ProgressBar({ progPercent }) {
  console.log(progPercent);
  const hundredthAdjustedProg = progPercent * 100;
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-header">
        <div className="progress-title">Progress</div>
        <div className="progress-percent">{hundredthAdjustedProg}%</div>
      </div>
      <progress max={100} value={hundredthAdjustedProg}></progress>
    </div>
  );
}

export default ProgressBar;
