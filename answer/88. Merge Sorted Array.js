/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let nums1 = [-1, 0, 0, 0, 0, 0, 0, 0, 0]
let nums2 = [1, 2, 3, 0, 0, 0]
let nums3 = [-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0]
let nums4 = [2, 0]
var merge = function (nums1, m, nums2, n) {
  let i = 0
  nums2.forEach(num => {
    while (i < nums1.length) {
      if (i == 0 && num < nums1[i]) {
        //头部塞
        nums1.splice(i, 0, num)
        nums1.pop()
        m++;
        break;
      } else if (num >= nums1[i] && num < nums1[i + 1]) {
        //加进去
        nums1.splice(i + 1, 0, num)
        nums1.pop()
        m++;
        i++;
        break;
      } else if (i >= m) {
        //替换0
        nums1.splice(i, 1, num)
        i++;
        m++;
        break;
      }
      i++
    }
  })
};
merge(nums1, 6, [1, 2, 2], 3)
console.log(nums1);

merge(nums2, 3, [2, 5, 6], 3)
console.log(nums2);

merge(nums3, 5, [-1, -1, 0, 0, 1, 2], 6)
console.log(nums3);

merge(nums4, 1, [1], 1)
console.log(nums4);