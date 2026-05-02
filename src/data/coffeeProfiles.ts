import type { CoffeeProfile } from "../types/quiz";

export const coffeeProfiles: CoffeeProfile[] = [
  {
    id: "ethiopian-washed",
    name: "Ethiopian Washed",
    description: "A bright and aromatic cup with tea-like body and fruit-forward acidity.",
    retailPicks: [
      {
        title: "Organic Ethiopian Yirgacheffe Light Roast Ground Coffee",
        description:
          "Certified USDA Organic light roast with gentle floral zest—great for fruity-coffee seekers who brew pour-over.",
        url: "https://www.target.com/p/signature-coffee-organic-ethiopian-yirgacheffe-light-roast-ground-coffee-12oz-good-38-gather-8482/-/A-78613367",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_dffc5ffa-5231-4ecc-b67a-0af95bc1f51a?wid=1200&hei=1200&qlt=80",
      },
      {
        title: "Lavazza Classico Medium Roast Ground Coffee",
        description:
          "Smooth Italian-roast familiarity with mellow fruit notes—pairs well if you still want approachable brightness.",
        url: "https://www.target.com/p/lavazza-classico-medium-roast-ground-coffee-12oz/-/A-16849682",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_4a0fee0f-127b-412a-bd43-5378a9ef9050?wid=1200&hei=1200&qlt=80",
      },
    ],
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
    retailPicks: [
      {
        title: "Peet's Coffee Big Bang Medium Roast Ground Coffee",
        description:
          "Medium-bodied with lively citrus and silky caramel—balanced enough for weekday drip or cold brew batches.",
        url: "https://www.target.com/p/peet-s-big-bang-medium-roast-ground-coffee/-/A-89169491?preselect=50300298",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_33e8f74f-1025-44dd-9f99-d00e173bb7a0?wid=1200&hei=1200&qlt=80",
      },
      {
        title: "Caribou Blend Medium Roast Ground Coffee",
        description:
          "Smooth chocolate and woody spice with low drama—friendly crowd pleaser straight from your automatic brewer.",
        url: "https://www.target.com/p/caribou-coffee-caribou-blend-medium-roast-ground-coffee/-/A-89130131",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_a7413c0a-a5cd-420e-9db3-d54c47318fc9?wid=1200&hei=1200&qlt=80",
      },
    ],
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
    retailPicks: [
      {
        title: "Death Wish Coffee Dark Roast Ground Coffee",
        description:
          "Extra bold caffeine plus smoky cocoa depth—hits the richness profile when you crave dark chocolate intensity.",
        url: "https://www.target.com/p/death-wish-coffee-dark-roast-ground-coffee-10oz/-/A-88498115",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_afa8052c-a127-465f-9554-6f0f726f3d3e?wid=1200&hei=1200&qlt=80",
      },
      {
        title: "Starbucks Caffè Verona Dark Roast Ground Coffee",
        description:
          "Roasty cocoa truffle notes with bittersweet caramel—steady grocery shelf favorite for nightly espresso drinks.",
        url: "https://www.target.com/p/starbucks-dark-roast-ground-coffee-8212-caff-232-verona-8212-100-arabica-8212-1-bag-12-oz/-/A-12954046",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_0c5cb611-38ee-4fdb-8a0d-2a4f63d70880?wid=1200&hei=1200&qlt=80",
      },
    ],
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
    retailPicks: [
      {
        title: "Counter Culture Fast Forward Whole Bean Coffee",
        description:
          "Medium roast with fudge-like sweetness plus crisp fruit—elevates drip coffee while honoring nut-forward comfort.",
        url: "https://www.target.com/p/counter-culture-fast-forward-medium-roast-whole-bean-coffee-12oz/-/A-54468930",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_fa670e76-057c-4ade-bd62-86f6068bbc26?wid=1200&hei=1200&qlt=80",
      },
      {
        title: "Seattle's Best 6th Avenue Bistro Dark Roast Ground Coffee",
        description:
          "Dark roast with hazelnut-brown sugar vibes—pairs well when you crave nutty baker’s chocolate vibes.",
        url: "https://www.target.com/p/seattle-39-s-best-coffee-fair-trade-organic-6th-avenue-bristo-dark-roast-ground-coffee-10oz/-/A-94480937",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_6bfe75cf-1de5-4837-986f-e3caa7e1f9dc?wid=1200&hei=1200&qlt=80",
      },
    ],
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
    retailPicks: [
      {
        title: "RYZE Mushroom Coffee",
        description:
          "Mushroom-spiked arabica roast with mellow body—nice when you want something tea-like yet still coffee-forward.",
        url: "https://www.target.com/p/ryze-mushroom-coffee-4-2oz/-/A-95242666?preselect=94825538",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_9580e58c-ef44-4a49-9982-b79c736a4e23?wid=1200&hei=1200&qlt=80",
      },
      {
        title: "Cafe Bustelo Dulce de Leche Ground Coffee",
        description:
          "Sweet caramelized cream notes balanced by classic Latin roast depth—pour it when you crave dessert-y comfort.",
        url: "https://www.target.com/p/cafe-bustelo-dulce-de-leche-ground-coffee-11oz/-/A-94462115",
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_5664e019-5548-4b62-9ee4-73b40a0154d4?wid=1200&hei=1200&qlt=80",
      },
    ],
    target: {
      caffeine: "low",
      roast: 15,
      fruitAffinity: 70,
      chocolateAffinity: 10,
      flavorCategory: "floral",
    },
  },
];
