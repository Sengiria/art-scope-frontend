import '@testing-library/jest-dom';
import { vi } from 'vitest';

class IntersectionObserverMock {
  constructor(private callback: any) {}
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
  root = null;
  rootMargin = '';
  thresholds = [];
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);