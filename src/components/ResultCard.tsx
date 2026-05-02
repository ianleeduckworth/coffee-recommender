import type { RecommendationResult } from "../types/quiz";

type ResultCardProps = {
  topRecommendation: RecommendationResult;
  alternates: RecommendationResult[];
  onRestart: () => void;
};

export default function ResultCard({ topRecommendation, alternates, onRestart }: ResultCardProps) {
  return (
    <section className="result-card">
      <p className="eyebrow">Your best match</p>
      <h2>{topRecommendation.profile.name}</h2>
      <p>{topRecommendation.profile.description}</p>
      <p className="score">Match score: {topRecommendation.score}%</p>

      <h3>Why this fits</h3>
      <ul>
        {topRecommendation.reasons.map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>

      {alternates.length > 0 && (
        <>
          <h3>Other options to try</h3>
          <ul>
            {alternates.map((alt) => (
              <li key={alt.profile.id}>
                <strong>{alt.profile.name}</strong> ({alt.score}%)
              </li>
            ))}
          </ul>
        </>
      )}

      <button className="primary-btn" onClick={onRestart} type="button">
        Retake Quiz
      </button>
    </section>
  );
}
