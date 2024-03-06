import { loadDotEnv } from './load-dot-env.function';

describe('loadDotEnv', () => {
  it('does what we all expect', () => {
    expect(process.env['SALSA']).toBe(undefined);
    loadDotEnv('test/test-var-file');
    expect(process.env['SALSA']).toBe('PICANTE');
  });
});