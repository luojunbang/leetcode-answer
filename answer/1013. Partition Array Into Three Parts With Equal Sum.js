/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((rs, i) => rs + i)
    if (sum % 3 !== 0) return false
    const AVG = sum / 3
    console.log('AVG:', AVG);
    let s = 0, i = 0
    while (i < A.length) {
        s += A[i]
        if (s == AVG) { break }
        else { i++ }
    }
    let j = i + 1
    s = 0
    while (j < A.length) {
        s += A[j]
        if (s == AVG) { break }
        else j++
    }
    console.log(i, j);
    return j < A.length - 1
};
arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]
console.log(canThreePartsEqualSum(arr));
arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
console.log(canThreePartsEqualSum(arr));
arr = [6, 7, 8]
console.log(canThreePartsEqualSum(arr));
arr = [1, -1, 1, -1]
console.log(canThreePartsEqualSum(arr));
arr = [10, -10, 10, -10, 10, -10, 10, -10]
console.log(canThreePartsEqualSum(arr));