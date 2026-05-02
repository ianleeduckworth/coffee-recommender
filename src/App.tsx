import { useMemo, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import { coffeeProfiles } from "./data/coffeeProfiles";
import { quizQuestions } from "./data/questions";
import { rankRecommendations } from "./lib/scoreQuiz";
import type { CaffeineLevel, FlavorCategory, QuizAnswers } from "./types/quiz";

type QuizDraftAnswers = {
  caffeine?: CaffeineLevel;
  roast: number;
  flavorCategory?: FlavorCategory;
  fruitLikes: string[];
  chocolateLikes: string[];
};

const initialAnswers: QuizDraftAnswers = {
  roast: 50,
  fruitLikes: [],
  chocolateLikes: [],
};

type Stage = "landing" | "quiz" | "result";

export default function App() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizDraftAnswers>(initialAnswers);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);

  const finalizedAnswers: QuizAnswers = {
    caffeine: answers.caffeine ?? "medium",
    roast: answers.roast,
    flavorCategory: answers.flavorCategory ?? "balanced",
    fruitLikes: answers.fruitLikes,
    chocolateLikes: answers.chocolateLikes,
  };

  const recommendationResults = useMemo(
    () => rankRecommendations(finalizedAnswers, coffeeProfiles),
    [finalizedAnswers]
  );

  const handleNext = () => {
    setAnsweredQuestionIds((prev) => {
      const questionId = quizQuestions[currentQuestionIndex].id;
      if (prev.includes(questionId)) {
        return prev;
      }

      return [...prev, questionId];
    });

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((index) => index + 1);
      return;
    }

    setStage("result");
  };

  const handleBack = () => {
    setCurrentQuestionIndex((index) => Math.max(0, index - 1));
  };

  const handleRestart = () => {
    setAnswers(initialAnswers);
    setAnsweredQuestionIds([]);
    setCurrentQuestionIndex(0);
    setStage("landing");
  };

  if (stage === "landing") {
    return (
      <main className="app-shell">
        <section className="panel center">
          <p className="eyebrow">Coffee Recommender</p>
          <h1>Find your next favorite bag of coffee</h1>
          <p>
            Answer a quick set of preference questions and get a recommendation tuned to your ideal caffeine,
            roast, and flavor profile.
          </p>
          <button className="primary-btn" onClick={() => setStage("quiz")} type="button">
            Start Quiz
          </button>
        </section>
      </main>
    );
  }

  if (stage === "result") {
    return (
      <main className="app-shell">
        <section className="panel">
          <ResultCard
            topRecommendation={recommendationResults[0]}
            alternates={recommendationResults.slice(1, 3)}
            onRestart={handleRestart}
          />
        </section>
      </main>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentValue = answers[currentQuestion.id as keyof QuizDraftAnswers] as
    | string
    | string[]
    | number
    | undefined;
  const isCurrentQuestionAnswered =
    currentQuestion.kind === "slider"
      ? true
      : currentQuestion.kind === "single"
        ? typeof currentValue === "string" && currentValue.length > 0
        : Array.isArray(currentValue) && currentValue.length > 0;

  return (
    <main className="app-shell">
      <section className="panel">
        <ProgressBar
          questionNumber={currentQuestionIndex + 1}
          answeredCount={answeredQuestionIds.length}
          total={quizQuestions.length}
        />

        <QuestionCard
          question={currentQuestion}
          value={currentValue}
          onChange={(nextValue) => {
            setAnswers((prev) => ({
              ...prev,
              [currentQuestion.id]: nextValue,
            }));
          }}
        />

        <div className="actions">
          <button className="secondary-btn" disabled={currentQuestionIndex === 0} onClick={handleBack} type="button">
            Back
          </button>
          <button className="primary-btn" disabled={!isCurrentQuestionAnswered} onClick={handleNext} type="button">
            {currentQuestionIndex === quizQuestions.length - 1 ? "See Recommendation" : "Next"}
          </button>
        </div>
      </section>
    </main>
  );
}
