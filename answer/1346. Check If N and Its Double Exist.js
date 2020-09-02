/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var checkIfExist = function (arr) {
  if (arr.filter(i => i == 0).length > 1) return true
  arr = [...new Set(arr.filter(i => i != 0))]
  console.log([...arr, ...arr.map(i => i * 2)])
  console.log([...arr, ...arr.map(i => i / 2)])
  return (new Set([...arr, ...arr.map(i => i * 2)]).size < arr.length * 2) ||
    (new Set([...arr, ...arr.map(i => i / 2)]).size < arr.length * 2)
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([4, 4, 2, 11]));
console.log(checkIfExist([-8, -2, 11, 12, 17]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
