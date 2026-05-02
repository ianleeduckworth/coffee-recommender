import type { QuizQuestion } from "../types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "caffeine",
    prompt: "How much caffeine do you prefer?",
    kind: "single",
    options: [
      { id: "low", label: "Low - gentle lift" },
      { id: "medium", label: "Medium - balanced energy" },
      { id: "high", label: "High - strong kick" },
    ],
  },
  {
    id: "roast",
    prompt: "Where do you fall on the light-to-dark roast spectrum?",
    kind: "slider",
    min: 0,
    max: 100,
  },
  {
    id: "flavorCategory",
    prompt: "Which overall flavor profile sounds best?",
    kind: "single",
    options: [
      { id: "fruity", label: "Bright and fruity" },
      { id: "balanced", label: "Balanced and smooth" },
      { id: "chocolatey", label: "Rich and chocolate-forward" },
      { id: "nutty", label: "Nutty and warm" },
      { id: "floral", label: "Floral and tea-like" },
    ],
  },
  {
    id: "fruitLikes",
    prompt: "Which fruit notes do you enjoy in coffee? (Select all that apply)",
    kind: "multi",
    options: [
      { id: "berry", label: "Berry" },
      { id: "citrus", label: "Citrus" },
      { id: "stonefruit", label: "Stone fruit" },
      { id: "tropical", label: "Tropical fruit" },
    ],
  },
  {
    id: "chocolateLikes",
    prompt: "Which chocolate notes do you enjoy in coffee? (Select all that apply)",
    kind: "multi",
    options: [
      { id: "milk", label: "Milk chocolate" },
      { id: "dark", label: "Dark chocolate" },
      { id: "cocoa", label: "Cocoa nib" },
      { id: "mocha", label: "Mocha sweetness" },
    ],
  },
];
