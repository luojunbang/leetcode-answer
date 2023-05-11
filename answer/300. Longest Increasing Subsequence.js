/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS1 = function (nums) {
  const arr = [nums[0]]
  nums.forEach((num, idx) => {
    if (idx == 0) return
    if (num > arr[arr.length - 1]) {
      arr.push(num)
    } else {
      let i = 0
      while (i < arr.length) {
        if (arr[i] == num) break
        if (arr[i - 1] < num && arr[i] > num) {
          arr[i] = num
          break
        }
        i++
      }
      if (i == arr.length) {
        arr[0] = num
      }
    }
  })
  return arr.length
}

var lengthOfLIS = function (nums) {
  if (nums.length == 0) return 0
  const arr = [1]
  nums.forEach((num, idx) => {
    arr[idx] = 1
    for (let i = 0; i < idx; i++) {
      if (num > nums[i]) {
        arr[idx] = Math.max(arr[idx], arr[i] + 1)
      }
    }
  })
  return arr[arr.length - 1]
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums) === lengthOfLIS1(nums))
// nums = [0, 8, 4, 12, 2]
// console.log(lengthOfLIS(nums))
// nums = [0, 1, 0, 3, 2, 3]
// console.log(lengthOfLIS(nums))
// nums = [7, 7, 7, 7, 7, 7, 7]
// console.log(lengthOfLIS(nums))
nums = [3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]
console.log(lengthOfLIS(nums))
