import { describe, expect, it } from 'vitest';
import { naturalSort } from '../src/2-natural-sort';

describe('naturalSort', () => {
  it('sorts numeric suffixes by value, not lexicographically', () => {
    expect(naturalSort(['TH19', 'SG20', 'TH2'])).toEqual(['SG20', 'TH2', 'TH19']);
  });

  it('handles numbers embedded in the middle of a string', () => {
    expect(naturalSort(['TH10', 'TH3Netflix', 'TH1', 'TH7'])).toEqual([
      'TH1',
      'TH3Netflix',
      'TH7',
      'TH10',
    ]);
  });

  it('does not mutate the input array', () => {
    const input = ['TH19', 'SG20', 'TH2'];
    naturalSort(input);
    expect(input).toEqual(['TH19', 'SG20', 'TH2']);
  });
});
