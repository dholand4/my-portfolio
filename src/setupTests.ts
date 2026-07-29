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
