/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  return mat.reduce((rs, num, i) => rs + (mat.length - 1 - i !== i ? num[i] : 0) + num[mat.length - 1 - i], 0)
};

mat = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
console.log(diagonalSum(mat));
mat = [[5]]
console.log(diagonalSum(mat));
mat = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]
console.log(diagonalSum(mat));