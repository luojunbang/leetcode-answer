/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let countSaver = {}, maxVal = 0
  nums.forEach(i => {
    countSaver[i] = countSaver[i] ? countSaver[i] + 1 : 1
    maxVal = Math.max(countSaver[i], maxVal)
  })
  console.log(maxVal);
  let ans = nums.length
  let ary = Object.keys(countSaver).filter(i => countSaver[i] === maxVal)
  console.log(ary);
  ary.forEach(i => {
    ans = Math.min(ans, nums.lastIndexOf(+i) - nums.indexOf(+i) + 1)
  })
  return ans
};

nums = [1, 2, 2, 3, 1, 4, 2]
console.log(findShortestSubArray(nums));