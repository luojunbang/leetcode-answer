/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let  ans = []
  let noIn = arr1.filter(i => arr2.indexOf(i) == -1)
  noIn.sort((a, b) => a - b)
  arr2.forEach(t => {
    arr1.indexOf(t) !== -1 && ans.push(...arr1.filter(i => i == t))
  })
  return [...ans, ...noIn]
};

arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
console.log(relativeSortArray(arr1, arr2));