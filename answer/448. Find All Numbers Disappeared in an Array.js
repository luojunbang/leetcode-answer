/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    nums.forEach((i) => {
        let idx = Math.abs(Math.abs(i) - 1)
        if (idx >= 0) {
            nums[idx] = nums[idx] < 0 ? nums[idx] : -nums[idx]
        }
    })
    return nums.reduce((rs, i, idx) => {
        i >= 0 && rs.push(idx + 1)
        return rs
    }, [])
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));