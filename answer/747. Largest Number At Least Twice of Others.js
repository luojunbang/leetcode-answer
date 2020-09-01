/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const max = Math.max.apply(null, nums), idx = nums.indexOf(max)
  nums.splice(idx, 1)
  return nums.every(num => max >= num * 2) ? idx : -1
};

console.log(dominantIndex([1, 2]));

