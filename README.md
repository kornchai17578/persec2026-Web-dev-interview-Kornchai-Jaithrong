# persec2026-Web-dev-interview-Kornchai-Jaithrong

Pre-interview coding test for the Web Developer position, written in TypeScript.

## Structure

Each question lives in its own file under `src/`, with a matching test file under `tests/`.

| # | Question | Source | Tests |
|---|----------|--------|-------|
| 1 | Balanced brackets | [src/1-balanced-brackets.ts](src/1-balanced-brackets.ts) | [tests/1-balanced-brackets.test.ts](tests/1-balanced-brackets.test.ts) |
| 2 | Natural sort of strings | [src/2-natural-sort.ts](src/2-natural-sort.ts) | [tests/2-natural-sort.test.ts](tests/2-natural-sort.test.ts) |
| 3 | Autocomplete | [src/3-autocomplete.ts](src/3-autocomplete.ts) | [tests/3-autocomplete.test.ts](tests/3-autocomplete.test.ts) |
| 4 | Roman numerals (both directions) | [src/4-roman-numerals.ts](src/4-roman-numerals.ts) | [tests/4-roman-numerals.test.ts](tests/4-roman-numerals.test.ts) |
| 5 | Digits sorted descending | [src/5-descending-digits.ts](src/5-descending-digits.ts) | [tests/5-descending-digits.test.ts](tests/5-descending-digits.test.ts) |
| 6 | Tribonacci with custom seed | [src/6-tribonacci.ts](src/6-tribonacci.ts) | [tests/6-tribonacci.test.ts](tests/6-tribonacci.test.ts) |

## Running

```bash
npm install
npm test        # run all tests once
npm run build    # type-check only, no output emitted
```

## Notes on assumptions

- **Q2 (sort):** interpreted as "natural sort" — strings are split into
  alternating letter/digit runs; digit runs compare numerically (so `TH2` <
  `TH19`), everything else compares as text.
- **Q3 (autocomplete):** ties (two items whose match starts at the same
  index) keep their original relative order (stable sort); the spec gives
  no tie-breaking rule beyond match position.
- **Q6 (tribonacci):** the spec only shows examples where the seed has
  exactly 3 numbers. For a shorter seed (0-2 numbers), each new term sums
  whatever terms exist so far (up to the last 3), which stays consistent
  with the "sum of the 3 preceding terms" rule once the sequence has at
  least 3 entries.
