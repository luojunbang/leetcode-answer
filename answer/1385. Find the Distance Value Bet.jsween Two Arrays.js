/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    return arr1.filter(i1 => arr2.every(i2 => Math.abs(i1 - i2) > d)).length
};