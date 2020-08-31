/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let ans = 0, seat = seats.join('')
  seat.replace(/[0]+/g, rs => {
    console.log(rs);
    ans = Math.max(ans, Math.floor((rs.length + 1) / 2))
  })
  seat.replace(/^[0]+/, rs => {
    ans = Math.max(ans, rs.length)
  })
  seat.replace(/[0]+$/, rs => {
    ans = Math.max(ans, rs.length)
  })
  return ans
};

console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([1, 0, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([0,1,0,0,0,1,1,0,1,1]));