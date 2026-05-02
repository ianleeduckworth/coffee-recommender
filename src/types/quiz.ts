export type CaffeineLevel = "low" | "medium" | "high";
export type FlavorCategory = "fruity" | "balanced" | "chocolatey" | "nutty" | "floral";

export type QuizQuestion = {
  id: string;
  prompt: string;
  kind: "single" | "multi" | "slider";
  min?: number;
  max?: number;
  options?: Array<{ id: string; label: string }>;
};

export type QuizAnswers = {
  caffeine: CaffeineLevel;
  roast: number;
  flavorCategory: FlavorCategory;
  fruitLikes: string[];
  chocolateLikes: string[];
};

export type CoffeeProfile = {
  id: string;
  name: string;
  description: string;
  target: {
    caffeine: CaffeineLevel;
    roast: number;
    fruitAffinity: number;
    chocolateAffinity: number;
    flavorCategory: FlavorCategory;
  };
};

export type RecommendationResult = {
  profile: CoffeeProfile;
  score: number;
  reasons: string[];
};
