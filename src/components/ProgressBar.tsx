type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progressPercent = Math.round((current / total) * 100);

  return (
    <div aria-label="Quiz progress" className="progress-wrap">
      <div className="progress-meta">
        <span>
          Question {current} of {total}
        </span>
        <span>{progressPercent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
    </div>
  );
}
