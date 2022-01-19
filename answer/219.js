/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const ans = {};
  for (let i = 0; i < nums.length; i++) {
    if (ans[nums[i]] != undefined && Math.abs(ans[nums[i]] - i) <= k) return true;
    ans[nums[i]] = i;
  }
  return false;
};

(nums = [1, 2, 3, 1]), (k = 3);
console.log(
  "containsNearbyDuplicate(nums, k):",
  containsNearbyDuplicate(nums, k)
);
(nums = [1, 2, 3, 1, 2, 3]), (k = 2);
console.log(
  "containsNearbyDuplicate(nums, k):",
  containsNearbyDuplicate(nums, k)
);
