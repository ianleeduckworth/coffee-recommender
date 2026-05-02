import { useState } from "react";
import type { CoffeeRetailPick, RecommendationResult } from "../types/quiz";

type ResultCardProps = {
  topRecommendation: RecommendationResult;
  alternates: RecommendationResult[];
  retailPicks: CoffeeRetailPick[];
  onRestart: () => void;
};

function RetailPickLink({ pick }: { pick: CoffeeRetailPick }) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      aria-label={`${pick.title}. Opens retailer in a new tab.`}
      className="retail-card"
      href={pick.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="retail-thumb">
        {!failed ? (
          <img
            alt={pick.title}
            decoding="async"
            loading="lazy"
            onError={() => setFailed(true)}
            src={pick.imageUrl}
          />
        ) : (
          <div aria-hidden className="retail-thumb-fallback" />
        )}
      </div>
      <div className="retail-copy">
        <h4 className="retail-title">{pick.title}</h4>
        <p className="retail-description">{pick.description}</p>
      </div>
    </a>
  );
}

export default function ResultCard({ topRecommendation, alternates, retailPicks, onRestart }: ResultCardProps) {
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

      {retailPicks.length > 0 && (
        <>
          <h3 className="retail-section-title">Shop picks</h3>
          <p className="hint">
            Tailored coffees you can grab now—tap a card to check price and pickup options on the retailer’s site.
          </p>
          <div className="retail-grid">
            {retailPicks.map((pick, index) => (
              <RetailPickLink key={`${pick.url}-${index}`} pick={pick} />
            ))}
          </div>
        </>
      )}

      <button className="primary-btn" onClick={onRestart} type="button">
        Retake Quiz
      </button>
    </section>
  );
}
