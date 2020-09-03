/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let ary = mat.map(item => {
    const idx = item.indexOf(0)
    return idx==-1?0:item.slice(idx).length
  }), cache = [...ary]
  console.log(ary);
  ary.sort((a, b) => b - a)
  let ans = []
  ary.slice(0, k).forEach(item => {
    let idx = cache.indexOf(item)
    while (ans.indexOf(idx) !== -1 && (idx + 1) < cache.length) {
      idx = cache.indexOf(item, idx + 1)
    }
    ans.push(idx)
  })
  return ans
};

mat =
  [[1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]],
  k = 3
// console.log(kWeakestRows(mat, k));
mat = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 1, 1, 1, 1]]
k = 3
console.log(kWeakestRows(mat, k));
