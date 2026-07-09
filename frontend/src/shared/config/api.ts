export function getBackendUrl(): string {
  const port = process.env.PORT ?? '3003';
  return process.env.BACKEND_URL ?? `http://localhost:${port}`;
}
