/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let res = arr.reduce((rs, i) => {
    rs[i] = ~~rs[i] + 1
    return rs
  }, {})
  return Math.max(-1, ...Object.keys(res).filter(i => res[i] == i))
};
arr = [2, 2, 3, 4]
console.log(findLucky(arr));
arr = [1,2,2,3,3,3]
console.log(findLucky(arr));