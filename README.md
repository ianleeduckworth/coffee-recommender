# Coffee Recommender Quiz

A React + TypeScript quiz that asks users about caffeine, roast level, and flavor preferences to generate a personalized coffee recommendation.

## Runtime

This project is pegged to Node LTS:

- Node: `24.15.0`
- `.nvmrc` is included for `nvm use`

## Getting Started

```bash
nvm use
npm install
npm run dev
```

## Scripts

- `npm run dev` - start dev server
- `npm run build` - type-check and create production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint
- `npm run test` - run Vitest once

## Project Structure

- `src/data/questions.ts` - quiz definition
- `src/data/coffeeProfiles.ts` - recommendation candidates
- `src/lib/scoreQuiz.ts` - scoring and ranking engine
- `src/components/*` - reusable UI components
- `src/App.tsx` - quiz flow and screens
