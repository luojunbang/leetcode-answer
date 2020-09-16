/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    const R = M.length, C = M[0].length
    function getValue({ x, y }) {
        let count = 0, ans = 0
            ;[x - 1, x, x + 1].forEach(c => {
                [y - 1, y, y + 1].forEach(r => {
                    if (c >= 0 && c < R && r >= 0 && r < C) {
                        ans += M[c][r]
                        count++
                    }
                })
            })
        return ~~(ans / count)
    }
    return M.map((row, x) => row.map((item, y) => getValue({ x, y })))
};
M =
    [[1, 2, 1],
    [1, 0, 1],
    [1, 1, 1]]
M = [[2, 3]]
M = [[2], [3]]
console.log(imageSmoother(M));

// [[1,1,1],[1,1,1],[0,0,0]]