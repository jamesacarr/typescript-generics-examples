import get from './get';

describe('get', () => {
  it('returns undefined when passed an undefined object', () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const value = get(undefined, 'key');
    expect(value).toBe(undefined);
  });

  it('returns undefined when passed a null object', () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const value = get(null, 'key');
    expect(value).toBe(undefined);
  });

  it('returns undefined when passed an empty path', () => {
    const object = { key: 'value' };

    // @ts-expect-error
    const value = get(object, null);
    expect(value).toBe(undefined);
  });

  it('returns top level value from object', () => {
    const object = { key: 'value' };
    const value = get(object, 'key');
    expect(value).toBe('value');
  });

  it('returns second level value from object', () => {
    const object = { parent: { child: 'value' } };
    const value = get(object, ['parent', 'child']);
    expect(value).toBe('value');
  });

  it('returns third level value from object', () => {
    const object = { parent: { middle: { child: 'value' } } };
    const value = get(object, ['parent', 'middle', 'child']);
    expect(value).toEqual('value');
  });

  it('returns keys that are objects', () => {
    const object = { parent: { middle: { child: 'value' } } };
    const value = get(object, ['parent', 'middle']);
    expect(value).toEqual({ child: 'value' });
  });

  it('returns true booleans correctly', () => {
    const object = { key: true };
    const value = get(object, 'key');
    expect(value).toBe(true);
  });

  it('returns false booleans correctly', () => {
    const object = { key: false };
    const value = get(object, 'key');
    expect(value).toBe(false);
  });

  it('returns null values correctly', () => {
    const object = { key: null };
    const value = get(object, 'key');
    expect(value).toBeNull();
  });
});
