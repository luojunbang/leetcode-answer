/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let l = nums.length, r = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        r = Math.max(r, j);
        l = Math.min(l, i);
      }
    }
  }
  return r - l < 0 ? 0 : r - l + 1;
};
console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
console.log(findUnsortedSubarray([1, 3, 2, 2, 2]));
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));