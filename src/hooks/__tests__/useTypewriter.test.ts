import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useTypewriter } from '../useTypewriter';

describe('useTypewriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(Math, 'random').mockReturnValue(0);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('starts empty', () => {
    const { result } = renderHook(() =>
      useTypewriter({ phrases: ['Olá.'], typeSpeed: 50 }),
    );
    expect(result.current).toBe('');
  });

  it('types one character per tick', () => {
    const { result } = renderHook(() =>
      useTypewriter({ phrases: ['Olá.'], typeSpeed: 50, holdMs: 1000 }),
    );
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(result.current).toBe('O');
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(result.current).toBe('Ol');
  });

  it('returns empty string for empty phrases list', () => {
    const { result } = renderHook(() => useTypewriter({ phrases: [] }));
    expect(result.current).toBe('');
  });
});
