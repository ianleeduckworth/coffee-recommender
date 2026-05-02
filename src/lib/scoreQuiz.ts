import type { CaffeineLevel, CoffeeProfile, QuizAnswers, RecommendationResult } from "../types/quiz";

const caffeineScoreMap: Record<CaffeineLevel, number> = {
  low: 0,
  medium: 50,
  high: 100,
};

const clamp = (value: number) => Math.max(0, Math.min(100, value));

const toAffinity = (selections: string[], totalOptions: number) => {
  if (selections.length === 0) {
    return 0;
  }

  return clamp(Math.round((selections.length / totalOptions) * 100));
};

const closeness = (actual: number, target: number) => clamp(100 - Math.abs(actual - target));

export const scoreProfile = (answers: QuizAnswers, profile: CoffeeProfile): RecommendationResult => {
  const fruitAffinity = toAffinity(answers.fruitLikes, 4);
  const chocolateAffinity = toAffinity(answers.chocolateLikes, 4);

  const caffeineMatch = closeness(caffeineScoreMap[answers.caffeine], caffeineScoreMap[profile.target.caffeine]);
  const roastMatch = closeness(answers.roast, profile.target.roast);
  const fruitMatch = closeness(fruitAffinity, profile.target.fruitAffinity);
  const chocolateMatch = closeness(chocolateAffinity, profile.target.chocolateAffinity);
  const flavorMatch = answers.flavorCategory === profile.target.flavorCategory ? 100 : 35;

  const weightedScore =
    caffeineMatch * 0.2 + roastMatch * 0.25 + fruitMatch * 0.2 + chocolateMatch * 0.2 + flavorMatch * 0.15;

  const reasons: string[] = [];
  if (roastMatch >= 75) reasons.push("Matches your preferred roast depth.");
  if (fruitMatch >= 75) reasons.push("Aligns with your fruit-note preferences.");
  if (chocolateMatch >= 75) reasons.push("Fits your chocolate-note preferences.");
  if (flavorMatch >= 75) reasons.push("Strong match for your core flavor profile.");
  if (caffeineMatch >= 75) reasons.push("Caffeine intensity is close to your target.");

  if (reasons.length === 0) {
    reasons.push("Offers a balanced fit across your preferences.");
  }

  return {
    profile,
    score: Math.round(weightedScore),
    reasons,
  };
};

export const rankRecommendations = (answers: QuizAnswers, profiles: CoffeeProfile[]): RecommendationResult[] => {
  return profiles.map((profile) => scoreProfile(answers, profile)).sort((a, b) => b.score - a.score);
};
