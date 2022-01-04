/**
15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  console.log(nums);
  nums.forEach((n, idx) => {
    if (n == nums[idx - 1]) return;
    let r = nums.length - 1;
    for (let l = idx + 1; l < nums.length - 1; l++) {
      if (l > idx + 1 && nums[l] == nums[l - 1]) continue;
      while (l < r && n + nums[l] + nums[r] > 0) {
        r--;
      }
      if (l == r) break;
      if (n + nums[l] + nums[r] == 0) ans.push([n, nums[l], nums[r]]);
    }
  });
  return ans;
};
nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
nums = [0, 0, 0];
// nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
