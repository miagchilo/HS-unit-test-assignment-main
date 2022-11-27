import { describe, expect, it } from 'vitest';
import { getMoonScore } from '../utils/moonScore';

describe('getMoonScore', () => {
  it('should return blank for score 0', () => {
    const score = getMoonScore(0);
    expect(score).toBe('');
  });

  // TODO: Add missing test cases here
  // for ALL possible outputs of this helper function
  // Tip: don't repeat implementation details in the test
  // just rely on inputs/outputs

  it('should render 1 full moon if score is 20', () => {
    const score = getMoonScore(20);
    expect(score).toBe('🌕');
  });

  it('should render 2 full moon if score is 40', () => {
    const score = getMoonScore(40);
    expect(score).toBe('🌕🌕');
  });

  it('should render 3 full moon if score is 60', () => {
    const score = getMoonScore(60);
    expect(score).toBe('🌕🌕🌕');
  });

  it('should render 4 full moon if score is 80', () => {
    const score = getMoonScore(80);
    expect(score).toBe('🌕🌕🌕🌕');
  });

  it('should contain a half moon if the score is not dividable by 20', () => {
    const score = getMoonScore(50);
    expect(score).toContain('🌗');
  });

  it('should render 5 full moons if score 100', () => {
    const score = getMoonScore(100);

    // {n} matches the previous regex token exactly n times
    expect(score).toMatch(/^(🌕){5}$/);
  });
});
