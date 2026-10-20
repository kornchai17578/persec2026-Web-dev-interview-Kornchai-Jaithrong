import { describe, expect, it } from 'vitest';
import { intToRoman, romanToInt } from '../src/4-roman-numerals';

describe('intToRoman', () => {
  it.each([
    [1989, 'MCMLXXXIX'],
    [2000, 'MM'],
    [68, 'LXVIII'],
    [109, 'CIX'],
  ])('intToRoman(%i) === %s', (input, expected) => {
    expect(intToRoman(input)).toBe(expected);
  });
});

describe('romanToInt', () => {
  it.each([
    ['MCMLXXXIX', 1989],
    ['MM', 2000],
    ['LXVIII', 68],
    ['CIX', 109],
  ])('romanToInt(%s) === %i', (input, expected) => {
    expect(romanToInt(input)).toBe(expected);
  });

  it.each(['MCMLXXXXX', 'IIII', 'VV', 'IC', 'XM', 'IIV', ''])(
    'throws on malformed numeral %j',
    (input) => {
      expect(() => romanToInt(input)).toThrow();
    },
  );

  it('throws on an unknown symbol', () => {
    expect(() => romanToInt('MCA')).toThrow();
  });
});

describe('round trip', () => {
  it('converts back and forth for a range of numbers', () => {
    for (let n = 1; n <= 3999; n += 37) {
      expect(romanToInt(intToRoman(n))).toBe(n);
    }
  });
});
