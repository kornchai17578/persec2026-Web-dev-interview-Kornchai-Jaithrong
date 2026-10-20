import { describe, expect, it } from 'vitest';
import { autocomplete } from '../src/3-autocomplete';

describe('autocomplete', () => {
  it('matches the example from the spec', () => {
    expect(autocomplete('th', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 2)).toEqual([
      'Think',
      'Mother',
    ]);
  });

  it('is case-insensitive', () => {
    expect(autocomplete('TH', ['Mother', 'Think'], 5)).toEqual(['Think', 'Mother']);
  });

  it('returns an empty array when nothing matches', () => {
    expect(autocomplete('xyz', ['Mother', 'Think'], 5)).toEqual([]);
  });

  it('respects maxResult even when more items match', () => {
    expect(autocomplete('th', ['Mother', 'Think', 'Worthy'], 1)).toEqual(['Think']);
  });

  it('ranks middle matches before end matches, even when the end match is at a lower index', () => {
    expect(autocomplete('th', ['Both', 'Brother', 'Thing'], 5)).toEqual(['Thing', 'Brother', 'Both']);
  });

  it('returns an empty array when maxResult is negative', () => {
    expect(autocomplete('th', ['Think', 'Mother'], -1)).toEqual([]);
  });
});
