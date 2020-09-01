const isArrayEqual = require('../utils/utilsHelper').isArrayEqual

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const ary = [...new Set(Array.from(arr))]
  ary.sort((a, b) => a - b)
  return arr.map(i => ary.indexOf(i) + 1)
};

arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]
// console.log(arrayRankTransform(arr));
console.log(isArrayEqual(arrayRankTransform(arr), [5, 3, 4, 2, 8, 6, 7, 1, 3]));
arr = [100, 100, 100]
// console.log(isArrayEqual(arrayRankTransform(arr), [1, 1, 1]));
