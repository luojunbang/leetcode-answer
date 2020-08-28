const isArrayEqual = require('../utils/utilsHelper').isArrayEqual
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const input1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const input2 = [[1, 2, 3], [4, 5, 6]]
const input3 = [[1, 2, 3, 4, 5]]
var transpose = function (A) {
  return A[0].map((i, index) => A.map(item => item[index]))
};
console.log(isArrayEqual(transpose(input1), [[1, 4, 7], [2, 5, 8], [3, 6, 9]]));
console.log(isArrayEqual(transpose(input2), [[1, 4], [2, 5], [3, 6]]));
console.log(isArrayEqual(transpose(input3), [[1], [2], [3], [4], [5]]));