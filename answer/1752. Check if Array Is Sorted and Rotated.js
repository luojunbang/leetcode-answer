/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let flag = nums[0] >= nums[nums.length - 1]
    return !nums.some((num, idx) => {
        if (idx == 0) return false
        if (num < nums[idx - 1]) {
            if (flag) flag = false
            else return true
        }
        return false
    })
};

nums = [3, 4, 5, 1, 2]
console.log(check(nums));
nums = [2, 1, 3, 4]
console.log(check(nums));
nums = [2, 3, 4, 5, 1]
console.log(check(nums));