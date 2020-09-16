/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    return nums
        .reduce((rs, i,idx) => {
            if(idx<2) return rs
            let max = Math.max(...rs, i)
            return max === i ? [max, Math.max(...rs)] : [max, Math.max(i, Math.min(...rs))]
        }, [Math.max(nums[0], nums[1]), Math.min(nums[0], nums[1])])
        .reduce((rs, i) => rs * (i - 1), 1)
};
nums = [3, 4, 5, 2]
console.log(maxProduct(nums));
nums = [1, 5, 4, 5]
console.log(maxProduct(nums));
nums = [3, 7]
console.log(maxProduct(nums));
