/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  return new Array(rowIndex + 1)
    .fill(1)
    .reduce((res) => res.length == 0 ? [1] : [...res.map((item, idx) => idx == 0 ? 1 : item + res[idx - 1]), 1], [])
};
console.log(getRow(3));