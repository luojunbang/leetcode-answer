/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let res = [], n = 0, m = 0, i = 0
  while (m < nums1.length || n < nums2.length) {
    if (m >= nums1.length) {
      res = [...res,...nums2.slice(n, nums2.length)]
      break;
    }
    if (n > nums2.length) {
      res = [...res,...nums1.slice(n, nums1.length)]
      break;
    }
    if (nums1[m] > nums2[n]) {
      res.push(nums2[n])
      n++
    } else {
      res.push(nums1[m])
      m++
    }
  }
  let l = res.length
  if (l % 2 == 0) {
    i = l / 2
    return ((res[i] + res[i - 1]) / 2).toFixed(1)
  } else {
    i = Math.floor(l / 2)
    return res[i].toFixed(1)
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]) === '2.5')