/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let res = new Array(arr.length).fill(0)
    new Array(Math.ceil(arr.length / 2)).fill(0).map((i, idx) => idx * 2 + 1).slice(1).forEach(num => {
        let ary = new Array(num).fill(0)
        let s = 0, e = s + num - 1
        while (e < arr.length) {
            ary.forEach((_, i) => res[i + s] += 1)
            s++; e++;
        }
    })
    return res.reduce((rs, k, idx) => rs += (k+1) * arr[idx], 0)
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))