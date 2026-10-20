import { describe, expect, it } from 'vitest';
import { tribonacci } from '../src/6-tribonacci';

describe('tribonacci', () => {
  it.each([
    [[1, 3, 5], 5, [1, 3, 5, 9, 17]],
    [[2, 2, 2], 3, [2, 2, 2]],
    [[10, 10, 10], 4, [10, 10, 10, 30]],
  ])('tribonacci(%j, %i) === %j', (signature, count, expected) => {
    expect(tribonacci(signature, count)).toEqual(expected);
  });

  it('truncates when count is smaller than the signature', () => {
    expect(tribonacci([1, 3, 5], 2)).toEqual([1, 3]);
  });

  it('handles an empty signature by summing whatever terms exist so far', () => {
    expect(tribonacci([], 5)).toEqual([0, 0, 0, 0, 0]);
  });

  it('handles a signature shorter than 3 numbers', () => {
    expect(tribonacci([1], 5)).toEqual([1, 1, 2, 4, 7]);
  });
});
