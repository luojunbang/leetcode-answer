/**
 * 18. 四数之和
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const ans = [];1
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let r = nums.length - 1;
      const t = target - nums[i] - nums[j];
      for (let l = j + 1; l < nums.length - 1; l++) {
        if (l > j + 1 && nums[l] == nums[l - 1]) continue;
        while (l < r && nums[l] + nums[r] > t) {
          r--;
        }
        if (l == r) break;
        if (nums[l] + nums[r] == t)
          ans.push([nums[i], nums[j], nums[l], nums[r]]);
      }
    }
  }
  return ans;
};

// (nums = [1, 0, -1, 0, -2, 2]), (target = 0);
(nums = [2, 2, 2, 2, 2]), (target = 8);
console.log(fourSum(nums, target));
