/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Math.min()
    return prices.reduce((rs, price) => {
        min = Math.min(min, price)
        return Math.max(price - min, rs)
    }, 0)
    // return prices.reduce((rs, price, idx) => {
    //     return Math.max(rs, ...prices.slice(idx + 1).map(i => i - price))
    // }, 0)
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));