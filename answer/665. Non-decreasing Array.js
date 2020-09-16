/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let isTurn = false, i = nums.length - 1
    while (i > 0) {
        if (nums[i - 1] > nums[i]) {
            if (isTurn) return false
            isTurn = true
            nums[i - 1] = nums[i]
        }
        console.log(nums);
        i--
    }
    return true
};

// console.log(checkPossibility([4, 2, 3]));
// console.log(checkPossibility([1, 2, 1, 3, 3]));
// console.log(checkPossibility([3, 4, 2, 3]));
console.log(checkPossibility([4,5,7,1,8]));