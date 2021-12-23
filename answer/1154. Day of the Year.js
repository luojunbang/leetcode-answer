/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let [y, m, d] = date.split("-");
  const max = [1, 3, 5, 7, 8, 10, 12];
  const min = [4, 6, 9, 11];
  let res = 0;
  m = parseInt(m);
  if (m > 2) {
    if (y % 100 == 0) {
      if (y % 400 == 0) {
        res += 1;
      }
    } else if (y % 4 == 0) {
      res += 1;
    }
  }
  while (m-- > 0) {
    max.indexOf(m) != -1 && (res += 31);
    min.indexOf(m) != -1 && (res += 30);
    if (m == 2) res += 28;
  }
  return res + +d;
};

console.log(dayOfYear("2019-01-09") === 9);
console.log(dayOfYear("2019-02-10") === 41);
console.log(dayOfYear("2019-03-01") === 60);
console.log(dayOfYear("2004-03-01") === 61);
console.log(dayOfYear("2000-03-01") === 61);
console.log(dayOfYear("1900-03-01") === 60);
