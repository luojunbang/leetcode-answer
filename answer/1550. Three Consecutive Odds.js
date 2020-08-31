/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('start:', i);
    if (arr[i] % 2 == 1 && i + 1 < arr.length) {
      let temp = i + 1
      while (temp < arr.length && arr[temp] % 2 == 1) {
        if (temp - i == 2) { return true }
        temp++
      }
      console.log('jump:', temp);
      i = temp;
      console.log('change:', i);

    }
  }
  return false

};
console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log('----------');
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
console.log('----------');
console.log(threeConsecutiveOdds([1, 1, 1]));