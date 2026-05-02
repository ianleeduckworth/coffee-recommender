export type CaffeineLevel = "low" | "medium" | "high";
export type FlavorCategory = "fruity" | "balanced" | "chocolatey" | "nutty" | "floral";

export type QuizAnswers = {
  caffeine: CaffeineLevel;
  roast: number;
  flavorCategory: FlavorCategory;
  fruitLikes: string[];
  chocolateLikes: string[];
};

export type QuizDraftAnswers = {
  caffeine?: CaffeineLevel;
  roast: number;
  flavorCategory?: FlavorCategory;
  fruitLikes: string[];
  chocolateLikes: string[];
};

export type QuestionId = keyof QuizAnswers;
export type QuestionKind = "single" | "multi" | "slider";

export type SingleQuestionId = "caffeine" | "flavorCategory";
export type MultiQuestionId = "fruitLikes" | "chocolateLikes";
export type SliderQuestionId = "roast";

type OptionIdForQuestion<TId extends QuestionId> = QuizAnswers[TId] extends string[]
  ? QuizAnswers[TId][number]
  : Extract<QuizAnswers[TId], string>;

type QuestionBase<TId extends QuestionId, TKind extends QuestionKind> = {
  id: TId;
  prompt: string;
  kind: TKind;
};

export type SingleQuestion<TId extends SingleQuestionId = SingleQuestionId> = QuestionBase<TId, "single"> & {
  options: Array<{ id: OptionIdForQuestion<TId>; label: string }>;
};

export type MultiQuestion<TId extends MultiQuestionId = MultiQuestionId> = QuestionBase<TId, "multi"> & {
  options: Array<{ id: OptionIdForQuestion<TId>; label: string }>;
};

export type SliderQuestion<TId extends SliderQuestionId = SliderQuestionId> = QuestionBase<TId, "slider"> & {
  min: number;
  max: number;
};

export type QuizQuestion = SingleQuestion | MultiQuestion | SliderQuestion;

/** Branded retail product link for outbound sales picks (e.g. Target). */
export type CoffeeRetailPick = {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type CoffeeProfile = {
  id: string;
  name: string;
  description: string;
  retailPicks: CoffeeRetailPick[];
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
