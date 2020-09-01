const isArrayEqual = require('../utils/utilsHelper').isArrayEqual

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const ary = grid.reduce((res, item) => {
    res.push(...item)
    return res
  }, [])
  if(k==ary.length) return grid
  while (k > 0) {
    k--
    ary.unshift(ary.pop())
  }
  let res = []
  while (ary.length > 0) {
    res.push(ary.splice(0, grid[0].length))
  }
  return res
};

grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1

console.log(isArrayEqual(shiftGrid(grid, k), [[9, 1, 2], [3, 4, 5], [6, 7, 8]]));
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 9
console.log(isArrayEqual(shiftGrid(grid, k), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
