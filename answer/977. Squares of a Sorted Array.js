/**
 * @param {number[]} A
 * @return {number[]}
 */
const isArrayEqual = require('../utils/utilsHelper').isArrayEqual

var sortedSquares = function (A) {
  A.sort((a, b) => Math.abs(a) - Math.abs(b))
  return A.map(a => a * a)
};
console.log(isArrayEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]));
console.log(isArrayEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]));