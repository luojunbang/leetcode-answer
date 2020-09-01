/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let idx = 1
  //前置
  if (arr[0] > idx) {
    if (arr[0] - idx >= k) { return idx + k - 1 }
    else {
      let cache = idx
      k -= arr[0] - cache
      idx += arr[0] - cache
    }
  }
  //中置
  for (let i = 0; i < arr.length; i++) {
    while (idx < arr[i] && k > 0) {
      if (arr[i] - idx > 1) k--
      idx++
    }
    if (k == 0) return idx
  }
  //后置
  if (k > 0) return idx + k
};
arr = [7, 17, 22, 26, 34]
k = 9
console.log(findKthPositive(arr, k));
arr = [2, 3, 4, 7, 11], k = 5
console.log(findKthPositive(arr, k));
arr = [1, 2, 3, 4], k = 2
console.log(findKthPositive(arr, k));
arr = [2], k = 1
console.log(findKthPositive(arr, k));

