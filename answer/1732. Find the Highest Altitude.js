/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    return Math.max(...gain.reduce((rs, g) => {
        rs.push(rs[rs.length - 1] + g)
        return rs
    }, [0]))
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));