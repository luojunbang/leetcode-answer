/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  return arr.map((n, i) => i == arr.length - 1 ? -1 : Math.max(...arr.slice(i + 1)))
};