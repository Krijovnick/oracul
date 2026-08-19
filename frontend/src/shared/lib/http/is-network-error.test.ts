import { afterEach, describe, expect, it, vi } from 'vitest';
import { isNetworkError } from './is-network-error';

describe('isNetworkError', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('detects Chrome Failed to fetch TypeError', () => {
    expect(isNetworkError(new TypeError('Failed to fetch'))).toBe(true);
  });

  it('detects Firefox NetworkError when attempting to fetch', () => {
    expect(isNetworkError(new TypeError('NetworkError when attempting to fetch resource.'))).toBe(
      true,
    );
  });

  it('detects Firefox NetworkError by name', () => {
    const error = new Error('A network error occurred.');
    error.name = 'NetworkError';
    expect(isNetworkError(error)).toBe(true);
  });

  it('detects Safari Load failed TypeError', () => {
    expect(isNetworkError(new TypeError('Load failed'))).toBe(true);
  });

  it('detects network request failed', () => {
    expect(isNetworkError(new TypeError('Network request failed'))).toBe(true);
  });

  it('detects TypeError while navigator is offline', () => {
    vi.stubGlobal('navigator', { onLine: false });
    expect(isNetworkError(new TypeError('cancelled'))).toBe(true);
  });

  it('does not treat AbortError as a network error', () => {
    const error = new Error('The operation was aborted.');
    error.name = 'AbortError';
    expect(isNetworkError(error)).toBe(false);
  });

  it('does not treat aborted Failed to fetch as a network error', () => {
    const error = new TypeError('Failed to fetch');
    error.name = 'AbortError';
    expect(isNetworkError(error)).toBe(false);
  });

  it('does not treat generic Error as a network error', () => {
    expect(isNetworkError(new Error('Unable to get an interpretation'))).toBe(false);
  });

  it('does not treat an online TypeError with an unrelated message as a network error', () => {
    vi.stubGlobal('navigator', { onLine: true });
    expect(isNetworkError(new TypeError('Cannot read properties of undefined'))).toBe(false);
  });
});
