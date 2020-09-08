/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, ans = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        // console.log('pre:', pre, 'ans:', ans, 'num:', num);
        pre = Math.max(pre+num,num)
        ans = Math.max(ans, pre)
    }
    return ans
    console.log(ans);
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));