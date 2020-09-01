/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let ary = [],i=0
  while (i < nums.length) {
    if (nums[i] == 0) {
      ary.push(...nums.splice(i, 1))
    }else{
      i++
    }
  }
  return [...nums,...ary]
};
console.log(moveZeroes([0,1,0,3,12]));