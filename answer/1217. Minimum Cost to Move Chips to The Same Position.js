/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let l = 0, r = 0
  position.forEach(i => {
    i % 2 == 0 ? l++ : r++
  })
  return Math.min(l,r)
};
console.log(minCostToMoveChips([2,2,2,3,3]));
console.log(minCostToMoveChips([1,1000000000]));