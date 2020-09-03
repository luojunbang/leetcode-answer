/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let ans = []
  let i = 1
  while (i <= ~~(n / 2)) {
    ans.push(i, -i)
    i++
  }
  if (n % 2 == 1) ans.push(0)
  return ans
};

console.log(sumZero(5));
