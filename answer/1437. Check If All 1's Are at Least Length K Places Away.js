/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    if (k == 0) return true
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            let count = i + 1
            while (nums[count] == 0) {
                count++
            }
            if (count == nums.length) return true;
            if ((count - i - 1) < k) return false
            i = count - 1
        }
    }
    return true
};
nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2
console.log(kLengthApart(nums, k));
nums = [1, 0, 0, 1, 0, 1], k = 2
console.log(kLengthApart(nums, k));
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1, 0], 2));


