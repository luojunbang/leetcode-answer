/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = 0
  return nums.reduce((rs, i) => {
    ans = ans + i < i ? i : ans + i
    return Math.max(ans, rs)
  }, -Infinity)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1]));