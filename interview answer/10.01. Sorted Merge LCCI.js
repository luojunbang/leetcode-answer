/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  A.splice(m, A.length - m)
  let i = 0
  B.forEach(item => {
    if (A[i] > item) A.unshift(item)
    else {
      while (A[i] < item) {
        i++
      }
      A.splice(i, 0, item)
    }
  })
};
A = [1, 2, 3, 0, 0, 0], m = 3
B = [2, 5, 6], n = 3
// console.log(merge(A, m, B, n));
A = [2, 0]
B = [1]
console.log(merge(A, 1, B, 1));