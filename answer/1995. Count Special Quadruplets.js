/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets1 = function (nums) {
  let ans = 0;
  let a = 0;
  while (a < nums.length - 3) {
    let b = a + 1;
    while (b < nums.length - 2) {
      let c = b + 1;
      while (c < nums.length - 1) {
        let d = c + 1;
        while (d < nums.length) {
          const res = nums[a] + nums[b] + nums[c];
          if (res == nums[d]) ans++;
          d++;
        }
        c++;
      }
      b++;
    }
    a++;
  }
  return ans;
};

var countQuadruplets = function (nums) {
  const obj = {},
    l = nums.length;
  let ans = 0;
  for (let c = l - 2; c > 1; c--) {
    obj[nums[c + 1]] = obj[nums[c + 1]] ? obj[nums[c + 1]] + 1 : 1;
    for (let a = 0; a < c; a++) {
      for (let b = a + 1; b < c; b++) {
        ans += obj[nums[a] + nums[b] + nums[c]] || 0;
      }
    }
  }
  console.log(obj);
  return ans;
};

let nums = [10, 3, 3, 6, 4, 5];
// console.log(countQuadruplets(nums));
// nums = [1,2,3,6]
// console.log(countQuadruplets(nums));
// nums = [1, 1, 1, 3, 5];
// console.log(countQuadruplets(nums));
nums = [9, 6, 8, 23, 39, 23];
console.log(countQuadruplets(nums));
console.log(countQuadruplets1(nums));
