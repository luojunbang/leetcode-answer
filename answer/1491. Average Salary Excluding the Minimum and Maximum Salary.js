/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = Infinity, max = -Infinity
  return (salary.reduce((res, s) => {
    min = Math.min(min, s)
    max = Math.max(max, s)
    return res + s
  }, 0) - max - min) / (salary.length - 2).toFixed(5)
};