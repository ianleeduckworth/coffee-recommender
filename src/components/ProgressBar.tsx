type ProgressBarProps = {
  questionNumber: number;
  answeredCount: number;
  total: number;
};

export default function ProgressBar({ questionNumber, answeredCount, total }: ProgressBarProps) {
  const progressPercent = Math.round((answeredCount / total) * 100);

  return (
    <div aria-label="Quiz progress" className="progress-wrap">
      <div className="progress-meta">
        <span>
          Question {questionNumber} of {total}
        </span>
        <span>{progressPercent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
    </div>
  );
}
