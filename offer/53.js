
// 剑指 Offer 53 - I. 在排序数组中查找数字 I
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let st = nums.indexOf(target)
  return st === -1 ? 0 : nums.lastIndexOf(target) - st + 1
};

// 剑指 Offer 53 - II. 缺失的数字  
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const idx = nums.findIndex((item, index) => item !== index)
  return idx == -1 ? nums.length : idx
};