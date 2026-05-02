import type { CoffeeRetailPick, RecommendationResult } from "../types/quiz";

/**
 * Builds up to `limit` retail cards by walking quiz results from best → worst match
 * and appending each profile's picks in declaration order until the cap is reached.
 */
export function selectTopRetailPicks(results: RecommendationResult[], limit = 3): CoffeeRetailPick[] {
  const picks: CoffeeRetailPick[] = [];

  for (const result of results) {
    for (const pick of result.profile.retailPicks) {
      if (picks.length >= limit) {
        return picks;
      }

      picks.push(pick);
    }
  }

  return picks;
}
