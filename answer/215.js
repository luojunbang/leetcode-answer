/**
215. 数组中的第K个最大元素

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const ans = nums.slice(0, k);
  ans.sort((a, b) => b - a);
  for (let i = k; i < nums.length; i++) {
    let idx = 0;
    while (idx < ans.length && ans[idx] > nums[i]) {
      idx++;
    }
    if (idx == ans.length) continue;
    if (idx == 0) {
      ans.unshift(nums[i]);
    } else {
      ans.splice(idx, 0, nums[i]);
    }
    ans.pop();
    console.log(ans);
  }
  console.log(ans);
  return ans[ans.length - 1];
};

console.log("findKthLargest:", findKthLargest([2, 1], 2));
