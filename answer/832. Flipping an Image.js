/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  return A.map(ary => ary.reverse().map(i => i == 0 ? 1 : 0))
};