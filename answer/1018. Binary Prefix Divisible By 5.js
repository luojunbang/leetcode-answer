const isArrayEqual = require('../utils/utilsHelper').isArrayEqual

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let ans = 0
    return A.reduce((rs, num) => {
        ans = (ans * 2 + num).toString().substr(-1)
        rs.push(ans == 0 || ans == 5)
        return rs
    }, [])
};
// 1*1
// 1*2+0*1
// 1*2*2+0*2+1*1

console.log(isArrayEqual(
    prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]),
    [false, false, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false]
));