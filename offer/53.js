// 53 - II. 缺失的数字  LCOF
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const idx = nums.findIndex((item, index) => item !== index)
  return idx == -1 ? nums.length : idx
};