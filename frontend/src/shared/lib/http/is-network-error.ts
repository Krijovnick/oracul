const NETWORK_ERROR_MESSAGE =
  /failed to fetch|networkerror when attempting to fetch|load failed|network request failed/i;

export function isNetworkError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  if (error.name === 'AbortError') {
    return false;
  }

  if (NETWORK_ERROR_MESSAGE.test(error.message) || error.name === 'NetworkError') {
    return true;
  }

  return (
    error.name === 'TypeError' &&
    typeof navigator !== 'undefined' &&
    navigator.onLine === false
  );
}
