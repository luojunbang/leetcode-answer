/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let s = i
    while (nums[i] < nums[i + 1]) {
      i++
    }
    ans = Math.max(ans, i - s + 1)
  }
  return ans
};

// console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));