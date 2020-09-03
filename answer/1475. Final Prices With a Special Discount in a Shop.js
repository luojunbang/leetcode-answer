/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  return prices.map((price, i) => {
    const subPirces = prices.slice(i + 1), idx = subPirces.findIndex(n => n <= price)
    return idx === -1 ? price : price - subPirces[idx]
  })
};
prices = [8, 4, 6, 2, 3]
console.log(finalPrices([8, 4, 6, 2, 3]));