/**
给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length == 1) return 0;
  let res = nums[0] > nums[1] ? [0, 1] : [1, 0];
  nums.forEach((num, idx) => {
    if (idx < 2) return;
    if (num > nums[res[1]] && num < nums[res[0]]) res[1] = idx;
    else if (num > nums[res[0]]) {
      res.unshift(idx);
      res = res.slice(0, 2);
    }
  });
  console.log(res);
  if (nums[res[0]] >= nums[res[1]] * 2) return res[0];
  return -1;
};

nums = [1, 2, 3, 4];
nums = [0, 0, 0, 1];
console.log(dominantIndex(nums));
