/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let ans = 1, res = 1
  nums.forEach(num => {
    res += num
    if (res > 0) { }
    else {
      ans += 1 - res
      res = 1
    }
  })
  return ans
};


console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([1, -2, -3]));
nums = [1, 2]
console.log(minStartValue(nums));