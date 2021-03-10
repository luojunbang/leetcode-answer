/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    let res = new Array(nums.length).fill(0)
    nums.forEach((num, idx) => {
        new Array(num).fill(0).forEach((_, idx) => { res[idx]++ })
    })
    const idx = res.findIndex((i, idx) => i == idx + 1)
    return idx!=-1 ? idx + 1 : -1
};

nums = [3, 5]
console.log(specialArray(nums));
nums = [0, 0]
console.log(specialArray(nums));
nums = [0, 4, 3, 0, 4]
console.log(specialArray(nums));
nums = [3, 6, 7, 7, 0]
console.log(specialArray(nums));