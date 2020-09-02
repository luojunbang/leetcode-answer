/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let [x1, y1, x2, y2] = [coordinates[0][0], coordinates[0][1], coordinates[1][0], coordinates[1][1]]
  if (x2 === x1) return !coordinates.some(i => i[0] != x1)
  let k = (y2 - y1) / (x2 - x1)
  let b = y1 - k * x1 // y=kx+b
  for (let i = 2; i < coordinates.length; i++) {
    if (k * coordinates[i][0] + b !== coordinates[i][1]) {
      return false
    }
  }
  return true
}

coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
console.log(checkStraightLine(coordinates));
coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
console.log(checkStraightLine(coordinates.reverse()));
coordinates = [[1, 1], [2, 2], [2, 0]]
console.log(checkStraightLine(coordinates));
coordinates = [[1, 0], [2, 0], [3, 0]]
console.log(checkStraightLine(coordinates));
coordinates = [[0, 0], [0, 1], [0, 2]]
console.log(checkStraightLine(coordinates));
coordinates = [[0, 0], [0, 1], [0, -1]]
console.log(checkStraightLine(coordinates));