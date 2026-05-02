import { describe, expect, it } from "vitest";
import { coffeeProfiles } from "../data/coffeeProfiles";
import type { RecommendationResult } from "../types/quiz";
import { selectTopRetailPicks } from "./selectTopRetailPicks";

const profile = (id: string) => {
  const found = coffeeProfiles.find((item) => item.id === id);
  if (!found) {
    throw new Error(`Profile not found for id=${id}`);
  }

  return found;
};

describe("selectTopRetailPicks", () => {
  it("walks ranked results in order and fills picks until limit", () => {
    const ethiopian = profile("ethiopian-washed");
    const colombian = profile("colombian-balanced");

    const results: RecommendationResult[] = [
      { profile: ethiopian, score: 100, reasons: [] },
      { profile: colombian, score: 80, reasons: [] },
    ];

    const picks = selectTopRetailPicks(results, 3);

    expect(picks.map((pick) => pick.title)).toEqual([
      ethiopian.retailPicks[0]?.title,
      ethiopian.retailPicks[1]?.title,
      colombian.retailPicks[0]?.title,
    ]);
  });

  it("skips profiles with empty retail picks", () => {
    const brazil = profile("brazil-nutty");
    const withoutRetail = { ...brazil, retailPicks: [] };

    expect(
      selectTopRetailPicks([{ profile: withoutRetail, score: 100, reasons: [] }], 3)
    ).toEqual([]);

    const blended: RecommendationResult[] = [
      { profile: withoutRetail, score: 100, reasons: [] },
      { profile: brazil, score: 50, reasons: [] },
    ];

    const picks = selectTopRetailPicks(blended, 2);
    expect(picks.map((pick) => pick.title)).toEqual([
      brazil.retailPicks[0]?.title,
      brazil.retailPicks[1]?.title,
    ]);
  });
});
