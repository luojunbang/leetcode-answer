/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0) return false
  const idx = matrix[0].filter(item => item <= target).length
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > target) return false
    let j = 0
    while (j < idx) {
      if (matrix[i][j] == target) return true
      j++
    }
  }
  return false
};

[13, 12, 20].forEach(item => {
  console.log(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], item))
})