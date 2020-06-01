function pathToArray(value: string | string[]): string[] {
  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}

/**
 * Gets the property value at path of object. The key is a top-level property
 * of the object.
 *
 * @param object The object to query
 * @param path The key of the property to get
 * @return Returns the resolved value
 */
function get<TObject extends object, TKey extends keyof TObject>(
  object: TObject,
  path: TKey
): TObject[TKey];

/**
 * Gets the property value at path of object. The key is a second-level
 * property of the object.
 *
 * @param object The object to query
 * @param path The path of the property to get as an array
 * @return Returns the resolved value
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1]
>(object: TObject, path: [TKey1, TKey2]): TObject[TKey1][TKey2];

/**
 * Gets the property value at path of object. The key is a third-level property
 * of the object.
 *
 * @param object The object to query
 * @param path The path of the property to get as an array
 * @return Returns the resolved value
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2]
>(object: TObject, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3];

/**
 * Gets the property value at path of object. Returns undefined when the object
 * itself is null or undefined.
 *
 * @param object The object to query
 * @param path The path of the property to get
 * @return Returns undefined
 */
function get(object: null | undefined, path: string): undefined;

/**
 * Gets the property value at path of object. This overload has to exist and be
 * permissive enough that all previous overloads are covered. However, it
 * doesn't actually allow "any" value through, the other overloads are what
 * control the types.
 *
 * @param object The object to query
 * @param path The path of the property to get
 * @return Returns the resolved value
 */
function get(object: any, path: string | string[]): any {
  if (object === null || object === undefined) {
    return undefined;
  }

  const pathArray = pathToArray(path);
  if (pathArray.length === 0) {
    return undefined;
  }

  let value = object;
  for (const key of pathArray) {
    if (value) {
      value = value[key];
    }
  }

  return value;
}

export default get;
