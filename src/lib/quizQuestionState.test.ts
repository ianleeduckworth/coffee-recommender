import { describe, expect, it } from "vitest";
import { quizQuestions } from "../data/questions";
import type { QuizDraftAnswers, QuizQuestion } from "../types/quiz";
import { getQuestionState } from "./quizQuestionState";

const findQuestion = <TKind extends QuizQuestion["kind"]>(kind: TKind, id: string) => {
  return quizQuestions.find((question) => question.kind === kind && question.id === id);
};

const requireQuestion = <TKind extends QuizQuestion["kind"]>(kind: TKind, id: string) => {
  const question = findQuestion(kind, id);
  if (!question) {
    throw new Error(`Question not found: ${id}`);
  }

  return question;
};

describe("getQuestionState", () => {
  it("returns slider as answered immediately", () => {
    const question = requireQuestion("slider", "roast");

    const state = getQuestionState(question, {
      roast: 40,
      fruitLikes: [],
      chocolateLikes: [],
    });

    expect(state.kind).toBe("slider");
    expect(state.isAnswered).toBe(true);
    expect(state.value).toBe(40);
  });

  it("requires selection for single questions", () => {
    const question = requireQuestion("single", "flavorCategory");

    const unanswered = getQuestionState(question, {
      roast: 50,
      fruitLikes: [],
      chocolateLikes: [],
    });
    expect(unanswered.isAnswered).toBe(false);

    const answered = getQuestionState(question, {
      roast: 50,
      flavorCategory: "nutty",
      fruitLikes: [],
      chocolateLikes: [],
    });
    expect(answered.isAnswered).toBe(true);
  });

  it("requires at least one selection for multi questions", () => {
    const question = requireQuestion("multi", "fruitLikes");

    const unanswered: QuizDraftAnswers = {
      roast: 50,
      fruitLikes: [],
      chocolateLikes: [],
    };
    expect(getQuestionState(question, unanswered).isAnswered).toBe(false);

    const answered: QuizDraftAnswers = {
      roast: 50,
      fruitLikes: ["berry"],
      chocolateLikes: [],
    };
    expect(getQuestionState(question, answered).isAnswered).toBe(true);
  });
});
