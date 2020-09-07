/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let l = digits.length - 1, isAddOne = false
  while ((l >= 0 && isAddOne) || l == digits.length - 1) {
    let temp = digits[l] + 1
    isAddOne = temp >= 10
    digits[l] = isAddOne ? temp % 10 : temp
    l--
  }
  isAddOne && digits.unshift(1)
  return digits
};
console.log(plusOne([9, 8, 9, 9]));