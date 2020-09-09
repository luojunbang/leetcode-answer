/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let ans = {}
    deck.forEach(i => ans[i] = ~~ans[i] + 1)
    let i = 2, min = Math.min(...Object.values(ans))
    while (i <= min) {
        if (Object.values(ans).every(item => item % i === 0)) return true
        i++
    }
    return false
};
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));