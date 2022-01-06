/**
 * 62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const ans = new Array(n).fill(0).map((_) => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    ans[0][i] = 1;
  }
  for (let i = 0; i < n; i++) {
    ans[i][0] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      ans[i][j] = ans[i - 1][j] + ans[i][j - 1];
    }
  }
  return ans[n - 1][m - 1];
};

console.log(uniquePaths(7, 3));
// f(i,j)=f(i-1,j)+f(i,j-1)
