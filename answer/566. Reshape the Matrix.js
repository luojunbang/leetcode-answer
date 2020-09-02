/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let ary = [], ans = new Array(r)
  nums.forEach(i => ary.push(...i))
  if (ary.length != r * c) return nums
  let key = 0
  for (let i = 0; i < r; i++) {
    ans[i] = []
    for (let j = 0; j < c; j++) {
      ans[i][j] = ary[key++]
    }
  }
  return ans
};
let nums = [[1, 2], [3, 4]],
  r = 1, c = 4
// console.log(matrixReshape(nums, r, c));
nums = [[1, 2], [3, 4]]
r = 4, c = 1
console.log(matrixReshape(nums, r, c));
