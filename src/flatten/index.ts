type Arr = any;

/**
 * 
 * @param arr 要拍平的数组
 * @param d 拍平的层数，如果不知 arr 层数，填入 Infinity，直接拍成一维的。
 */
export default function flatten(arr: Arr, d: number = 1) {
  if (d > 0) {
    return arr.reduce(function flattenInner(acc: any[], val: Arr) {
      return acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val), [];
    })
  } else {
    arr.slice()
  }
};