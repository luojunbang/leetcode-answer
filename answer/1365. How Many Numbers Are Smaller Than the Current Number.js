const isArrayEqual = require('../utils/utilsHelper').isArrayEqual

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map(i=>nums.filter(num=>num<i).length)
};

nums = [8,1,2,2,3]
console.log(isArrayEqual(smallerNumbersThanCurrent(nums), [4, 0, 1, 1, 3]));