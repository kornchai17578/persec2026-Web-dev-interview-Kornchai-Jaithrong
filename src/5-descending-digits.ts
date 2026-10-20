/**
 * Rearranges the digits of a positive integer in descending order and
 * returns the result as an integer, e.g. 3008 => 8300.
 */
export function sortDigitsDescending(num: number): number {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error('sortDigitsDescending expects a positive integer');
  }

  const sorted = String(num)
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('');

  return Number(sorted);
}
