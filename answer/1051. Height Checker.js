/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const cache = [...heights]
  cache.sort((a, b) => a - b)
  return cache.reduce((rs, item, idx) => item != heights[idx] ? rs + 1 : rs, 0)
};

console.log(heightChecker([1,1,4,5,2,1,3]));
console.log(heightChecker([5,1,2,3,4]));
console.log(heightChecker([1,2,3,4,5]));