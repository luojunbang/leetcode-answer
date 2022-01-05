/**
 * 59. 螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = new Array(n).fill(0).map((i) => new Array(n).fill(0));
  const mid = ~~(n / 2);
  let idx = 0;
  let num = 1;
  while (idx < mid) {
    console.log(idx);
    let row = idx,
      col = idx;
    while (col < n - idx - 1) {
      ans[row][col] = num;
      num++;
      col++;
    }
    while (row < n - idx - 1) {
      ans[row][col] = num;
      num++;
      row++;
    }
    while (col > idx) {
      ans[row][col] = num;
      num++;
      col--;
    }
    while (row > idx) {
      ans[row][col] = num;
      num++;
      row--;
    }
    idx++;
  }
  if (ans[mid][mid] == 0) ans[mid][mid] = n * n;
  console.log(ans);
};
console.log(generateMatrix(5));
