import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useNavScroll } from '../useNavScroll';

describe('useNavScroll', () => {
  let originalScrollY: number;

  beforeEach(() => {
    originalScrollY = window.scrollY;
  });

  afterEach(() => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: originalScrollY,
    });
  });

  it('is false when scroll is below threshold', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    const { result } = renderHook(() => useNavScroll(20));
    expect(result.current).toBe(false);
  });

  it('flips to true once scroll passes threshold', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    const { result } = renderHook(() => useNavScroll(20));
    act(() => {
      Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);
  });
});
