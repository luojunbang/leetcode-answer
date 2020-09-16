/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let ans = 0
    grid.forEach(ary => {
        let l = ary.length - 1
        while (l >= 0 && ary[l] < 0) {
            ans++
            l--
        }
    })
    return ans
};
grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
console.log(countNegatives(grid));