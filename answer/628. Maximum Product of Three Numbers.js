/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let l = nums.length
  nums.sort((a, b) => a - b)
  return Math.max(nums[0] * nums[1] * nums[l - 1], nums[l - 1] * nums[l - 2] * nums[l - 3])

};
console.log(maximumProduct([1, 2, -3, -4, -1]) === 24);