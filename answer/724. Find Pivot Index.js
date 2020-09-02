/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length == 0) return -1
  if (nums.length == 1) return 0
  let l = 0, r = nums.slice(1).reduce((res, i) => res + i)
  if (l == r) return 0
  for (let i = 1; i < nums.length; i++) {
    l += nums[i - 1]
    r -= nums[i]
    if (l == r) return i
  }
  return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([-1, -1, -1, 0, 1, 1]));
console.log(pivotIndex([-1, 1, 0]));