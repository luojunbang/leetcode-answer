/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let ans = []
  for (let i = 0; i < nums.length - 1; i += 2) {
    while (nums[i] > 0) {
      nums[i]--;
      ans.push(nums[i + 1])
    }
  }
  return ans
};


console.log(decompressRLElist([1,2,3,4]));