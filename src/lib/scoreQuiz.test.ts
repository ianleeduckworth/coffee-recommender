import { describe, expect, it } from "vitest";
import { coffeeProfiles } from "../data/coffeeProfiles";
import { rankRecommendations } from "./scoreQuiz";

describe("rankRecommendations", () => {
  it("favors bright profiles for fruity light-roast preferences", () => {
    const results = rankRecommendations(
      {
        caffeine: "medium",
        roast: 20,
        flavorCategory: "fruity",
        fruitLikes: ["berry", "citrus", "tropical"],
        chocolateLikes: [],
      },
      coffeeProfiles
    );

    expect(results[0].profile.id).toBe("ethiopian-washed");
  });

  it("favors chocolate-forward dark profiles when requested", () => {
    const results = rankRecommendations(
      {
        caffeine: "high",
        roast: 90,
        flavorCategory: "chocolatey",
        fruitLikes: [],
        chocolateLikes: ["milk", "dark", "cocoa", "mocha"],
      },
      coffeeProfiles
    );

    expect(results[0].profile.id).toBe("sumatra-dark");
  });

  it("returns deterministic ordering for neutral responses", () => {
    const results = rankRecommendations(
      {
        caffeine: "medium",
        roast: 50,
        flavorCategory: "balanced",
        fruitLikes: [],
        chocolateLikes: [],
      },
      coffeeProfiles
    );

    expect(results).toHaveLength(coffeeProfiles.length);
    expect(results[0].score).toBeGreaterThanOrEqual(results[1].score);
  });
});
