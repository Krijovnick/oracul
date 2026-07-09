export function requiredEnv(name: string): string {
  const value = process.env[name];

  if (value === undefined || value.trim() === '') {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function requiredIntEnv(name: string): number {
  const value = requiredEnv(name);
  const parsed = Number.parseInt(value, 10);

  if (!Number.isInteger(parsed)) {
    throw new Error(
      `Environment variable ${name} must be a valid integer, received "${value}"`,
    );
  }

  return parsed;
}

export function optionalEnv(name: string, defaultValue: string): string {
  const value = process.env[name];

  if (value === undefined || value.trim() === '') {
    return defaultValue;
  }

  return value;
}
