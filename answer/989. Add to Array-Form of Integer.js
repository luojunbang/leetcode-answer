/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  A = A.reverse()
  K.toString().split("").reverse().forEach((num, idx) => {
    let sum = ~~A[idx] + +num, addOne = sum >= 10, i = idx
    A[i] = sum % 10
    while (addOne) {
      ++i;
      addOne = (~~A[i] + 1) >= 10
      A[i] = (~~A[i] + 1) % 10
    }
  })
  return A.reverse()
};

// A = [1, 2, 0, 0], K = 34
// console.log(addToArrayForm(A, K));
// A = [2, 7, 4], K = 181
// console.log(addToArrayForm(A, K));
// A = [2, 1, 5], K = 806
// console.log(addToArrayForm(A, K));
A = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], K = 1
console.log(addToArrayForm(A, K));
A = [0], K = 23
console.log(addToArrayForm(A, K));

