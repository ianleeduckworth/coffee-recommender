import type { MultiQuestion, SingleQuestion, SliderQuestion } from "../types/quiz";

type SliderQuestionCardProps = {
  question: SliderQuestion;
  value: number;
  onChange: (value: number) => void;
};

type SingleQuestionCardProps = {
  question: SingleQuestion;
  value: string | undefined;
  onChange: (value: string) => void;
};

type MultiQuestionCardProps = {
  question: MultiQuestion;
  value: string[];
  onChange: (value: string[]) => void;
};

type QuestionCardProps = SliderQuestionCardProps | SingleQuestionCardProps | MultiQuestionCardProps;

const isSliderProps = (props: QuestionCardProps): props is SliderQuestionCardProps =>
  props.question.kind === "slider";

const isSingleProps = (props: QuestionCardProps): props is SingleQuestionCardProps =>
  props.question.kind === "single";

export default function QuestionCard(props: QuestionCardProps) {
  if (isSliderProps(props)) {
    const { question, value, onChange } = props;
    return (
      <div className="question-card">
        <h2>{question.prompt}</h2>
        <p className="hint">0 is very light roast, 100 is very dark roast.</p>
        <input
          type="range"
          min={question.min}
          max={question.max}
          value={value}
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

  if (isSingleProps(props)) {
    const { question, value, onChange } = props;
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

  const { question, value: selectedValues, onChange } = props;

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
