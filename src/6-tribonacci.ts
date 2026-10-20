/**
 * Generates a Tribonacci-like sequence: each new term is the sum of the
 * up-to-three terms preceding it. `signature` is the seed (0-3 numbers,
 * taken as the first terms of the result) and `count` is the total length
 * of the returned sequence, signature included.
 *
 * When the signature has fewer than 3 numbers there is not yet a "sum of
 * the 3 preceding terms" to fall back on, so each new term sums whatever
 * terms already exist (up to the last 3) - this keeps the rule consistent
 * while still matching every example where signature.length === 3.
 */
export function tribonacci(signature: number[], count: number): number[] {
  if (count < 0) {
    throw new Error('tribonacci expects a non-negative count');
  }

  const result = signature.slice(0, count);

  while (result.length < count) {
    const lastThree = result.slice(-3);
    const next = lastThree.reduce((sum, value) => sum + value, 0);
    result.push(next);
  }

  return result;
}
