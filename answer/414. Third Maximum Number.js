/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let ans = [Math.max(), Math.max(), Math.max()], max = nums[0]
    function findPlace(x) {
        if (ans.indexOf(x) >= 0) return
        const idx = ans.findIndex(i => x > i && x != i)
        if (idx != -1) {
            ans.splice(idx, 0, x)
            ans.pop()
        }
    }
    nums.forEach(i => {
        max = Math.max(max, i)
        findPlace(i)
    })
    return isFinite(ans[2]) ? ans[2] : max
};
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2]));