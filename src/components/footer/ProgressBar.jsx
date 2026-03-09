function ProgressBar({ progPercent }) {
  const hundredthAdjustedProg = parseInt(progPercent * 100);
  return (
    <div className="progress-bar-wrapper">
      <progress
        max={100}
        value={hundredthAdjustedProg}
        className="progressbar"
      ></progress>
    </div>
  );
}

export default ProgressBar;
