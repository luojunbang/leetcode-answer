/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  return nums.splice(n, n).reduce((res, item, idx) => res.concat(nums[idx], item), [])
};
nums = [2, 5, 1, 3, 4, 7], n = 3
console.log(shuffle(nums, n));