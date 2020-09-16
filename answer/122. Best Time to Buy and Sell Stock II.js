/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let ans = 0, i = 0, rise = []
    while (i < prices.length) {
        if (prices[i + 1] && prices[i] <= prices[i + 1]) {
            rise.push(prices[i])
        } else {
            rise.push(prices[i])
            rise.length > 1 && (ans = ans + rise[rise.length - 1] - rise[0])
            rise = []
        }
        i++
    }
    return ans
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

