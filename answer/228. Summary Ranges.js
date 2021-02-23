/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if(nums.length==0) return []
    let sNum = nums[0]
    return nums.reduce((rs, num, index) => {
        if (index == 0) return rs
        if (++sNum < num) {
            if (nums[index - 1] > rs[rs.length - 1]) rs[rs.length - 1] += `->${nums[index - 1]}`
            rs.push(num.toString())
            sNum = num
        } else if (index == nums.length - 1) {
            rs[rs.length - 1] = `${rs[rs.length - 1]}->${nums[index]}`
        }
        return rs
    }, [sNum.toString()])
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));