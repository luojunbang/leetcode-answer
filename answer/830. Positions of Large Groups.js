/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let sNum = 0, currS = S[0], ans = []
    Array.from(S).forEach((s, idx) => {
        if (s == currS) { sNum++ }
        else {
            if (sNum >= 3) {
                ans.push([idx - sNum, idx - 1])
            }
            sNum = 1
            currS = s
        }
    })
    if (sNum >= 3) ans.push([S.length - sNum, S.length - 1])
    return ans
};
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
console.log(largeGroupPositions('aaa'));
console.log(largeGroupPositions('azzzz'));
console.log(largeGroupPositions("abbxxxxzzy"));
