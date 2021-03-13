/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let index = -1, dis = Number.MAX_VALUE
    points.some(([x1, y1], idx) => {
        if (x1 === x && y1 === y) {
            index = idx
            return true
        }
        if ((x === x1 || y1 === y) && (Math.abs(y1 - y) + Math.abs(x1 - x) < dis)) {
            index = idx
            dis = Math.abs(y1 - y) + Math.abs(x1 - x)
        }
        return false
    })
    return index
};

x = 3, y = 4, points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]
x = 3, y = 4, points = [[3, 4], [1, 2]]
console.log(nearestValidPoint(x, y, points));