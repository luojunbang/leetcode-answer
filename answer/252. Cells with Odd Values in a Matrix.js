/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  let ans = new Array(n).fill(0).map(i => new Array(m).fill(0))
  indices.forEach(item => {
    let [row, col] = item
    ans[row].forEach((_, i) => ans[row][i] += 1)
    ans.forEach(i => i[col] += 1)
  })
  return ans.reduce((rs, item) => rs + item.filter(i => i % 2 == 1).length, 0)
};
n = 2, m = 3, indices = [[0, 1], [1, 1]]
console.log(oddCells(n, m, indices));