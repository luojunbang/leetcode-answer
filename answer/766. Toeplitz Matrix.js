/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    // let num = matrix.length - 1
    // let res = matrix.map((item, idx) => {
    //     new Array(num - idx).fill(0).forEach(_ => item.unshift(null))
    //     new Array(idx).fill(0).forEach(_ => item.push(null))
    //     return item
    // })
    // console.log(res);
    // res = res[0].map((_, idx) => res.map(item => item[idx])).map(i => i.filter(i => i != null))
    // console.log(res);
    // return res.every(i => new Set(i).size == 1)
    return !matrix.some((arr, r) => arr.some((item, c) => r > 0 && c > 0 && item !== matrix[r - 1][c - 1]))
};
x = null
matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
]
matrix = [
    [1, 2],
    [2, 2]
]
console.log(isToeplitzMatrix(matrix));