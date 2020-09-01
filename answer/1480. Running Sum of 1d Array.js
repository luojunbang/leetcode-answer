/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let ans = [nums[0]]
  return nums.map((num, idx) => {
    if (idx == 0) return ans[0]
    let res = num + ans[idx - 1]
    ans.push(res)
    return res
  })
};
console.log(runningSum([1,2,3,4]));