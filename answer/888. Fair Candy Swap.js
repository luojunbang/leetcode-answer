/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let [sumA, sumB] = [A, B].map(item => item.reduce((res, i) => res + i), 0)
  let d = (sumB - sumA) / 2
  for (let i = 0; i < A.length; i++) {
    const idx = B.indexOf(A[i] + d)
    if (idx != -1) return [A[i], A[i] + d]
  }
};
A = [1, 2, 5], B = [2, 4]
console.log(fairCandySwap(A, B));
A = [1, 2], B = [2, 3]
console.log(fairCandySwap(A, B));