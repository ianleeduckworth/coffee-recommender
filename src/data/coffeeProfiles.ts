import type { CoffeeProfile } from "../types/quiz";

export const coffeeProfiles: CoffeeProfile[] = [
  {
    id: "ethiopian-washed",
    name: "Ethiopian Washed",
    description: "A bright and aromatic cup with tea-like body and fruit-forward acidity.",
    target: {
      caffeine: "medium",
      roast: 20,
      fruitAffinity: 90,
      chocolateAffinity: 20,
      flavorCategory: "fruity",
    },
  },
  {
    id: "colombian-balanced",
    name: "Colombian Balanced",
    description: "A smooth daily driver with caramel sweetness and light citrus complexity.",
    target: {
      caffeine: "medium",
      roast: 50,
      fruitAffinity: 50,
      chocolateAffinity: 50,
      flavorCategory: "balanced",
    },
  },
  {
    id: "sumatra-dark",
    name: "Sumatra Dark",
    description: "A full-bodied roast with earthy depth and bittersweet chocolate notes.",
    target: {
      caffeine: "high",
      roast: 85,
      fruitAffinity: 15,
      chocolateAffinity: 90,
      flavorCategory: "chocolatey",
    },
  },
  {
    id: "brazil-nutty",
    name: "Brazil Nutty",
    description: "A comforting cup with toasted nuts, cocoa, and mellow acidity.",
    target: {
      caffeine: "low",
      roast: 65,
      fruitAffinity: 20,
      chocolateAffinity: 70,
      flavorCategory: "nutty",
    },
  },
  {
    id: "geisha-floral",
    name: "Panama Geisha",
    description: "A delicate, floral coffee with jasmine aromatics and silky sweetness.",
    target: {
      caffeine: "low",
      roast: 15,
      fruitAffinity: 70,
      chocolateAffinity: 10,
      flavorCategory: "floral",
    },
  },
];
