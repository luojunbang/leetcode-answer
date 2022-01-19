/**
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [1];
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  let r = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * r;
    r *= nums[i];
  }
  return ans;
};

nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
