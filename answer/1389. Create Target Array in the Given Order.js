const isArrayEqual = require('../utils/utilsHelper').isArrayEqual
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let ans = []
  nums.forEach((num, i) => { ans.splice(index[i], 0, num) })
  return ans
};

nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1], target = [0, 4, 1, 3, 2]
console.log(isArrayEqual(createTargetArray(nums, index), target));
nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0], target = [0, 1, 2, 3, 4]
console.log(isArrayEqual(createTargetArray(nums, index), target));