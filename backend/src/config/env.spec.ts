import { optionalEnv, requiredEnv, requiredIntEnv } from './env';

describe('env helpers', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('requiredEnv', () => {
    it('returns the value when set', () => {
      process.env.TEST_VAR = 'hello';
      expect(requiredEnv('TEST_VAR')).toBe('hello');
    });

    it('throws when missing', () => {
      delete process.env.TEST_VAR;
      expect(() => requiredEnv('TEST_VAR')).toThrow(
        'Missing required environment variable: TEST_VAR',
      );
    });

    it('throws when empty', () => {
      process.env.TEST_VAR = '   ';
      expect(() => requiredEnv('TEST_VAR')).toThrow(
        'Missing required environment variable: TEST_VAR',
      );
    });
  });

  describe('requiredIntEnv', () => {
    it('returns a parsed integer', () => {
      process.env.TEST_PORT = '3003';
      expect(requiredIntEnv('TEST_PORT')).toBe(3003);
    });

    it('throws when missing', () => {
      delete process.env.TEST_PORT;
      expect(() => requiredIntEnv('TEST_PORT')).toThrow(
        'Missing required environment variable: TEST_PORT',
      );
    });

    it('throws when value is not an integer', () => {
      process.env.TEST_PORT = 'undefined';
      expect(() => requiredIntEnv('TEST_PORT')).toThrow(
        'Environment variable TEST_PORT must be a valid integer, received "undefined"',
      );
    });
  });

  describe('optionalEnv', () => {
    it('returns the default when missing', () => {
      delete process.env.NODE_ENV;
      expect(optionalEnv('NODE_ENV', 'development')).toBe('development');
    });

    it('returns the value when set', () => {
      process.env.NODE_ENV = 'production';
      expect(optionalEnv('NODE_ENV', 'development')).toBe('production');
    });
  });
});
