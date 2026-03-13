/**
 * Formatter Utility Tests
 */

import {capitalize, formatDate} from '../src/utils/formatters';

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('handles already-capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});

describe('formatDate', () => {
  it('formats a date to YYYY-MM-DD', () => {
    const date = new Date(2024, 0, 5); // January 5, 2024
    expect(formatDate(date)).toBe('2024-01-05');
  });

  it('pads single-digit months and days', () => {
    const date = new Date(2024, 8, 3); // September 3, 2024
    expect(formatDate(date)).toBe('2024-09-03');
  });
});
