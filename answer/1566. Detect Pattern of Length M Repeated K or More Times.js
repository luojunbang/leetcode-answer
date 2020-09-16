/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
    return arr.some((_, idx) => idx > (arr.length - m * k)?false:arr.slice(idx, idx + m).join('').repeat(k)===arr.slice(idx, idx + m * k).join(''))
};
arr = [1, 2, 4, 4, 4, 4], m = 1, k = 3
console.log(containsPattern(arr, m, k));
arr = [1, 2, 1, 2, 1, 1, 1, 3], m = 2, k = 2
console.log(containsPattern(arr, m, k));
arr = [1, 2, 1, 2, 1, 3], m = 2, k = 3
console.log(containsPattern(arr, m, k));
arr = [1, 2, 3, 1, 2], m = 2, k = 2
console.log(containsPattern(arr, m, k));
arr = [2, 2, 2, 2], m = 2, k = 3
console.log(containsPattern(arr, m, k));
