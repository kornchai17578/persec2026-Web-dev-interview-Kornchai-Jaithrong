import { describe, expect, it } from 'vitest';
import { isBalanced } from '../src/1-balanced-brackets';

describe('isBalanced', () => {
  it.each([
    ['()', true],
    ['([]]', false],
    ['([{}])', true],
    ['([[{}]]]', false],
    [')', false],
    ['(]}])', false],
    ['([)]', false],
    ['{', false],
  ])('isBalanced(%s) === %s', (input, expected) => {
    expect(isBalanced(input)).toBe(expected);
  });

  it('treats an empty string as balanced', () => {
    expect(isBalanced('')).toBe(true);
  });
});
