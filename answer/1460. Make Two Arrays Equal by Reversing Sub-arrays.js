/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  return arr.every(i=>i==target.splice(target.indexOf(i),1))
};