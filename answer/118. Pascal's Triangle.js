/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  return new Array(numRows).fill(1).reduce((res) => [...res, res.length == 0 ? [1] : res[res.length - 1].map((item, idx) => idx == 0 ? 1 : item + res[res.length - 1][idx - 1]).concat([1])], [])
};
console.log(generate(5));
console.log(generate(0));