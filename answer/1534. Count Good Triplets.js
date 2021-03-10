/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let res = 0
    arr.forEach((i, idx) => {
        arr.slice(idx + 1).forEach((j, jdx) => {
            arr.slice(idx + 1 + jdx + 1).forEach(k => {
                // console.log(i, j, k);
                // console.log(Math.abs(i - j), Math.abs(k - j), Math.abs(i - k));
                Math.abs(i - j) <= a && Math.abs(k - j) <= b && Math.abs(i - k) <= c && (res++)
            })
        })
    })
    return res
};

arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3
console.log(countGoodTriplets(arr, a, b, c));
arr = [1, 1, 2, 2, 3], a = 0, b = 0, c = 1
console.log(countGoodTriplets(arr, a, b, c));
