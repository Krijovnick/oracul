export function getGaMeasurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!id) return null;
  return /^G-[A-Z0-9]+$/i.test(id) ? id : null;
}

export function getHawkToken(): string | null {
  const token = process.env.NEXT_PUBLIC_HAWK_TOKEN?.trim();
  return token || null;
}

export function isAnalyticsEnabled(): boolean {
  return getGaMeasurementId() !== null || getHawkToken() !== null;
}
