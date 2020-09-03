/**
 * @param {number[]} nums
 * @return {number}
 */

// (fisrt + end) * n /2
var missingNumber = function (nums) {
  return nums.length / 2 * (1 + nums.length) - nums.reduce((res, i) => res + i)
};