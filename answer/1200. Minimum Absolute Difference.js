/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let min = Infinity
  arr.sort((a, b) => a - b)
  const minAry = arr.map((item, idx) => {
    if (idx + 1 == arr.length) return
    const d = arr[idx + 1] - item
    min = Math.min(min, d)
    return d
  })
  let ans = []
  minAry.forEach((item, idx) => {
    item == min && ans.push([arr[idx], arr[idx + 1]])
  })
  return ans
};

arr = [4, 2, 1, 3]
console.log(minimumAbsDifference(arr));
arr = [1,3,6,10,15]
console.log(minimumAbsDifference(arr));