/**
给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function (nums) {
  let first = nums[0],second = Number.MAX_VALUE
  // while(i=3)
};

// [20,100,10,12,5,13]

nums = [1, 5, 0, 4, 1, 3];
nums = [20, 100, 10, 12, 5, 13];
nums = [1, 2, 1, 3];
console.log(increasingTriplet(nums));
