/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  return matrix.length == 0 ? [] : new Array(matrix[0].length).fill(1).reduce(
    (res) => [
      ...res,
      ...[...[].concat.apply([], matrix.splice(0, 1)),
      ...[].concat.apply([], matrix.map(i => i.splice(i.length - 1, 1))),
      ...[].concat.apply([], matrix.splice(matrix.length - 1, 1)).reverse(),
      ...[].concat.apply([], matrix.map(i => i.splice(0, 1))).reverse()
      ]
    ]
    , [])
};

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(spiralOrder(matrix));
matrix = [
  [1, 2, 3, 4, 3, 4, 4],
  [5, 6, 7, 8, 3, 4, 4],
  [5, 6, 7, 8, 3, 4, 4],
  [1, 2, 3, 4, 3, 4, 4],
  [5, 6, 7, 8, 3, 4, 4],
  [5, 6, 7, 8, 3, 4, 4],
  [1, 2, 3, 4, 3, 4, 4],
  [5, 6, 7, 8, 3, 4, 4],
  [5, 6, 7, 8, 3, 4, 4],
  [9, 1, 1, 1, 3, 4, 4]
]
console.log(spiralOrder(matrix));
