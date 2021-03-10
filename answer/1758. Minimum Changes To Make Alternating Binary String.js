/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    const l = s.length, s1 = '01'.repeat(~~(l / 2)) + (l % 2 == 1 ? '0' : ''), s2 = '10'.repeat(~~(l / 2)) + (l % 2 == 1 ? '1' : '')
    return Math.min(...[s1, s2].map(item => {
        return [...item].reduce((rs, i, idx) => {
            if (s[idx] !== i) rs++
            return rs
        }, 0)
    }))
};

console.log(minOperations("1111"));