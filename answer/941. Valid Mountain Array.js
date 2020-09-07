/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let ass = true
  if (A.length < 3) return false
  if (A[0] > A[1]) return false
  for (let i = 2; i < A.length; i++) {
    if (A[i] == A[i - 1]) return false
    if (ass) {
      ass = A[i] > A[i - 1]
    } else {
      if (A[i] >= A[i - 1]) return false
    }

  }
  return !ass
};

console.log(validMountainArray([2, 1, 0]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));