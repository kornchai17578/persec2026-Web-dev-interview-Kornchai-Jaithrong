// Scratch file for trying functions by hand.
// Run with: npx tsx src/playground.ts

import { isBalanced } from './1-balanced-brackets';
import { naturalSort } from './2-natural-sort';
import { autocomplete } from './3-autocomplete';
import { intToRoman, romanToInt } from './4-roman-numerals';
import { sortDigitsDescending } from './5-descending-digits';
import { tribonacci } from './6-tribonacci';

console.log('1. isBalanced("([{}])") =', isBalanced(')('));
console.log('2. naturalSort(["TH19","SG20","TH2"]) =', naturalSort(['TH10', 'TH3Netflix', 'TH1', 'TH7']));
console.log(
  '3. autocomplete("th", [...], 2) =',
  autocomplete('a', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 1),
);
console.log('4. intToRoman(1989) =', intToRoman(1989));
console.log('4. romanToInt("MCMLXXXIX") =', romanToInt('MCMXCVII'));
console.log('5. sortDigitsDescending(3008) =', sortDigitsDescending(3008));
console.log('6. tribonacci([1,3,5], 5) =', tribonacci([1, 3], 6));
