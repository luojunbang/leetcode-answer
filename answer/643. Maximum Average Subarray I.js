/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let ans = 0, max = Math.max()
    nums.forEach((num, idx) => {
        if (idx < k) ans += num
        else {
            console.log('idx:', idx, ans);
            ans += num - nums[idx - k]
            max = Math.max(max, ans)
        }
        if (idx == k - 1) max = ans
    })
    return max / k
};
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));