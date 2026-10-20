/**
 * Sorts an array of strings using "natural order": strings are split into
 * runs of digits and non-digits, non-digit runs are compared as text and
 * digit runs are compared by their numeric value (so "TH2" sorts before
 * "TH19", unlike plain lexicographic sort).
 */
export function naturalSort(items: string[]): string[] {
  const tokenize = (value: string): string[] => value.match(/\d+|\D+/g) ?? [];

  const compare = (a: string, b: string): number => {
    const tokensA = tokenize(a);
    const tokensB = tokenize(b);
    const length = Math.max(tokensA.length, tokensB.length);

    for (let i = 0; i < length; i++) {
      const tokenA = tokensA[i] ?? '';
      const tokenB = tokensB[i] ?? '';

      const isNumeric = /^\d+$/.test(tokenA) && /^\d+$/.test(tokenB);
      if (isNumeric) {
        const diff = Number(tokenA) - Number(tokenB);
        if (diff !== 0) return diff;
      } else if (tokenA !== tokenB) {
        return tokenA < tokenB ? -1 : 1;
      }
    }

    return 0;
  };

  return [...items].sort(compare);
}
