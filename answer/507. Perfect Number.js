/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  return (
    new Array(Math.floor(Math.sqrt(num)))
      .fill(0)
      .reduce(
        (rs, _, idx) =>
          Math.sqrt(num) == idx + 1
            ? rs + idx + 1
            : num % (idx + 1) === 0
            ? rs + idx + 1 + num / (idx + 1)
            : rs,
        0
      ) ==
    num * 2
  );
};

[1, 28, 6, 496, 8128, 2].forEach((i) => console.log(checkPerfectNumber(i)));
