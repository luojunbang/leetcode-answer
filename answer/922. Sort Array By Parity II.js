/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let ans = new Array(A.length), odd = 1, even = 0
  A.forEach(i => {
    if (i % 2 == 0) {
      ans[even] = i
      even += 2
    } else {
      ans[odd] = i
      odd += 2
    }
  })
  return ans
};

console.log(sortArrayByParityII([4, 2, 5, 7]));