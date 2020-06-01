import withErrorHandler from './with-error-handler';

describe('withErrorHandler', () => {
  it('returns data from promise handler', async () => {
    const handler = async () => 'data';
    const result = await withErrorHandler(handler)();
    expect(result).toBe('data');
  });

  it('returns data from non-promise handlers', async () => {
    const handler = () => 'data';
    const result = await withErrorHandler(handler)();
    expect(result).toBe('data');
  });

  it('returns data from handler as number', async () => {
    const handler = async () => 123;
    const result = await withErrorHandler(handler)();
    expect(result).toBe(123);
  });
});
