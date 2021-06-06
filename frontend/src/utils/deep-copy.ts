/**
 * 引数（配列、オブジェクト、プリミティブ値のいずれも）をディープコピーする
 * @param original ディープコピーする対象
 * @returns ディープコピーしたデータ
 */
export const deepCopy = <T>(original: T): T => {
  let clone: any;
  if (Array.isArray(original)) {
    clone = [...original].map((target: any) => deepCopy(target));
  } else if (original instanceof Date) {
    clone = new Date(original.getTime());
  } else if (original instanceof Function) {
    clone = () => original();
  } else if (original instanceof Object) {
    clone = cloneObject({ ...original });
  } else {
    clone = original;
  }
  return clone;
};

/**
 * 引数のオブジェクトのクローンを生成する
 * @param original クローンする対象
 * @returns クローンしたオブジェクト
 */
const cloneObject = <T>(original: T): T => {
  const clone: { [key: string]: any } = {};
  for (const [key, value] of Object.entries(original)) {
    clone[key] = deepCopy(value);
  }
  return clone as T;
};
