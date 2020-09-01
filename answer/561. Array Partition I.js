/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  return nums.reduce((res, n, i) => res + (i % 2 == 0 ? n : 0), 0)
};

console.log(arrayPairSum([1,4,3,2]));