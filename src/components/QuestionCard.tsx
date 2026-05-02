import type { QuizQuestion } from "../types/quiz";

type AnswerValue = string | string[] | number;

type QuestionCardProps = {
  question: QuizQuestion;
  value: AnswerValue;
  onChange: (value: AnswerValue) => void;
};

export default function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  if (question.kind === "slider") {
    return (
      <div className="question-card">
        <h2>{question.prompt}</h2>
        <p className="hint">0 is very light roast, 100 is very dark roast.</p>
        <input
          type="range"
          min={question.min}
          max={question.max}
          value={Number(value)}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <div className="range-values">
          <span>Light</span>
          <strong>{value}</strong>
          <span>Dark</span>
        </div>
      </div>
    );
  }

  if (question.kind === "single") {
    return (
      <div className="question-card">
        <h2>{question.prompt}</h2>
        <div className="options-grid">
          {question.options?.map((option) => (
            <button
              key={option.id}
              className={value === option.id ? "option is-active" : "option"}
              onClick={() => onChange(option.id)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const selectedValues = Array.isArray(value) ? value : [];

  return (
    <div className="question-card">
      <h2>{question.prompt}</h2>
      <div className="options-grid">
        {question.options?.map((option) => {
          const selected = selectedValues.includes(option.id);
          return (
            <button
              key={option.id}
              className={selected ? "option is-active" : "option"}
              onClick={() => {
                const next = selected
                  ? selectedValues.filter((item) => item !== option.id)
                  : [...selectedValues, option.id];
                onChange(next);
              }}
              type="button"
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
