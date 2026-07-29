import '@testing-library/jest-dom/vitest';

if (typeof globalThis.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    observe = () => undefined;
    unobserve = () => undefined;
    disconnect = () => undefined;
    takeRecords = () => [];
    root = null;
    rootMargin = '';
    thresholds = [];
  }
  globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
}

if (typeof globalThis.ResizeObserver === 'undefined') {
  class MockResizeObserver {
    observe = () => undefined;
    unobserve = () => undefined;
    disconnect = () => undefined;
  }
  globalThis.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;
}
