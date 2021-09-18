/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let l = Math.max(num1.length, num2.length);
  num1 = num1.padStart(l, "0");
  num2 = num2.padStart(l, "0");
  let h = 0;
  const res = [];
  while (--l >= 0) {
    const a = num1[l] || 0,
      b = num2[l] || 0;
    let temp = +a + +b + h;
    if (temp > 9) {
      h = 1;
      temp = temp % 10;
    } else {
      h = 0;
    }
    res.unshift(temp);
  }
  if (h == 1) res.unshift("1");
  return res.join("");
};
(num1 = "11"), (num2 = "123");
console.log(addStrings(num1, num2));
(num1 = "456"), (num2 = "77");
console.log(addStrings(num1, num2));
(num1 = "9"), (num2 = "1");
console.log(addStrings(num1, num2));
