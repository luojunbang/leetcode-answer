/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  return matrix[0].map((item, idx) => matrix.map(i => i[idx]).reduce((rs, item, index) => [Math.max(item, rs[0]), item > rs[0] ? index : rs[1]], [-Infinity, 0])).filter(i => i[0] === Math.min(...matrix[i[1]])).map(i => i[0])
};
matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
]
console.log(luckyNumbers(matrix));
matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]
console.log(luckyNumbers(matrix));
matrix = [
  [7, 8],
  [1, 2]
]
// console.log(luckyNumbers(matrix));

