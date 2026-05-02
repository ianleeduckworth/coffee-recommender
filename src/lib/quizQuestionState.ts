import type {
  MultiQuestion,
  QuizDraftAnswers,
  QuizQuestion,
  SingleQuestion,
  SliderQuestion,
} from "../types/quiz";

export type QuestionState =
  | { kind: "slider"; value: number; isAnswered: true }
  | { kind: "single"; value: string | undefined; isAnswered: boolean }
  | { kind: "multi"; value: string[]; isAnswered: boolean };

const assertNever = (value: never): never => {
  throw new Error(`Unhandled question kind: ${String(value)}`);
};

const getSliderQuestionState = (question: SliderQuestion, answers: QuizDraftAnswers): QuestionState => {
  return {
    kind: question.kind,
    value: answers[question.id],
    isAnswered: true,
  };
};

const getSingleQuestionState = (question: SingleQuestion, answers: QuizDraftAnswers): QuestionState => {
  const value = answers[question.id];
  const normalizedValue = typeof value === "string" ? value : undefined;

  return {
    kind: question.kind,
    value: normalizedValue,
    isAnswered: normalizedValue !== undefined && normalizedValue.length > 0,
  };
};

const getMultiQuestionState = (question: MultiQuestion, answers: QuizDraftAnswers): QuestionState => {
  const value = answers[question.id];
  const normalizedValue = Array.isArray(value) ? value : [];

  return {
    kind: question.kind,
    value: normalizedValue,
    isAnswered: normalizedValue.length > 0,
  };
};

export const getQuestionState = (question: QuizQuestion, answers: QuizDraftAnswers): QuestionState => {
  switch (question.kind) {
    case "slider":
      return getSliderQuestionState(question, answers);
    case "single":
      return getSingleQuestionState(question, answers);
    case "multi":
      return getMultiQuestionState(question, answers);
    default:
      return assertNever(question);
  }
};
