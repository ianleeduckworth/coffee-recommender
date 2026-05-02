import { useMemo, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import { coffeeProfiles } from "./data/coffeeProfiles";
import { quizQuestions } from "./data/questions";
import { rankRecommendations } from "./lib/scoreQuiz";
import type { QuizAnswers } from "./types/quiz";

const initialAnswers: QuizAnswers = {
  caffeine: "medium",
  roast: 50,
  flavorCategory: "balanced",
  fruitLikes: [],
  chocolateLikes: [],
};

type Stage = "landing" | "quiz" | "result";

export default function App() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);

  const recommendationResults = useMemo(() => rankRecommendations(answers, coffeeProfiles), [answers]);

  const handleNext = () => {
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
  const currentValue = answers[currentQuestion.id as keyof QuizAnswers] as string | string[] | number;

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
            setAnsweredQuestionIds((prev) => {
              if (prev.includes(currentQuestion.id)) {
                return prev;
              }

              return [...prev, currentQuestion.id];
            });
          }}
        />

        <div className="actions">
          <button className="secondary-btn" disabled={currentQuestionIndex === 0} onClick={handleBack} type="button">
            Back
          </button>
          <button className="primary-btn" onClick={handleNext} type="button">
            {currentQuestionIndex === quizQuestions.length - 1 ? "See Recommendation" : "Next"}
          </button>
        </div>
      </section>
    </main>
  );
}
