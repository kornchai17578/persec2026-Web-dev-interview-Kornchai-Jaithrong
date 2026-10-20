import { describe, expect, it } from 'vitest';
import { sortDigitsDescending } from '../src/5-descending-digits';

describe('sortDigitsDescending', () => {
  it.each([
    [3008, 8300],
    [1989, 9981],
    [2679, 9762],
    [9163, 9631],
  ])('sortDigitsDescending(%i) === %i', (input, expected) => {
    expect(sortDigitsDescending(input)).toBe(expected);
  });

  it('handles single-digit numbers', () => {
    expect(sortDigitsDescending(5)).toBe(5);
  });
});
