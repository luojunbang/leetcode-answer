/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1
    while (j < numbers.length) {
      if (numbers[i] + numbers[j] == target) {
        return [i + 1, j + 1]
      }
      j++
    }
  }
};
numbers = [2, 7, 11, 15], target = 9
console.log(twoSum(numbers, target));