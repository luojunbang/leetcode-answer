/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  const times = Math.ceil(b.length / a.length);
  return a.repeat(times + 1).indexOf(b) === -1
    ? a.repeat(times + 1).indexOf(b)
    : a.repeat(times).indexOf(b) != -1
    ? times
    : times + 1;
};

let a = "abcd",
  b = "cdabcdab";
console.log(repeatedStringMatch(a, b));
a = "a";
b = "aa";
console.log(repeatedStringMatch(a, b));
(a = "abc"), (b = "wxyz");
console.log(repeatedStringMatch(a, b));
(a = "a"), (b = "a");
console.log(repeatedStringMatch(a, b));
