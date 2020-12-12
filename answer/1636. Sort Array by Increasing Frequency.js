/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const res = nums.reduce((rs, num) => {
        rs[num] = rs[num] ? rs[num] + 1 : 1
        return rs
    }, {})
    console.log(res);
    let ary = Object.keys(res)
    ary.sort((a, b) => res[a] - res[b] || b - a)
    return ary.map(key => new Array(res[key]).fill(key)).flat()
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));