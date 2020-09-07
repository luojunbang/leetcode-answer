/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let curr = 0
    while (nums[i] == 1) {
      i++;
      curr++;
    }
    ans = Math.max(curr, ans)
  }
  return ans
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 1]));
console.log(findMaxConsecutiveOnes([0]));
console.log(findMaxConsecutiveOnes([]));