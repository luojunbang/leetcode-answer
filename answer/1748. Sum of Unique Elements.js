/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let obj = {}
    nums.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1)
    return Object.keys(obj).reduce((rs, num) => {
        if (obj[num] === 1) return rs += +num
        else return rs
    }, 0)
};

console.log(sumOfUnique([1,2,3,2]));
console.log(sumOfUnique([1, 1, 1, 1]));
console.log(sumOfUnique([1,2,3,4,5]));