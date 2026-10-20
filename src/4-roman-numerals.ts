const ROMAN_VALUES: Array<[number, string]> = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

const ROMAN_SYMBOL_VALUE: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/** Converts a positive integer (1-3999) to a Roman numeral string. */
export function intToRoman(num: number): string {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('intToRoman expects a positive integer');
  }

  let remaining = num;
  let result = '';

  for (const [value, symbol] of ROMAN_VALUES) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  return result;
}

/** Converts a Roman numeral string back to its integer value. */
export function romanToInt(roman: string): number {
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = ROMAN_SYMBOL_VALUE[roman[i]];
    const next = ROMAN_SYMBOL_VALUE[roman[i + 1]];

    if (current === undefined) {
      throw new Error(`Invalid roman numeral symbol: ${roman[i]}`);
    }

    if (next !== undefined && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
