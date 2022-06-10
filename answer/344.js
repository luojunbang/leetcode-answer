/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function () {
  const l = s.length;
  for (let i = 0; i < ~~(l / 2); i++) {
    const temp = s[i];
    s[i] = s[l - 1 - i];
    s[l - 1 - i] = temp;
  }
};

s = ["h", "e", "l", "l", "o", "a"];
reverseString();
console.log(s);
