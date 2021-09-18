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

var multiply = function (num1, num2) {
  let l1 = num1.length;
  const res = [];
  while (--l1 >= 0) {
    let a = num1[l1],
      l2 = num2.length;
    console.log("a:", a);
    while (--l2 >= 0) {
      const b = num2[l2];
      console.log("b:", b);
    }
  }
  return res.join("");
};

let num1 = "2",
  num2 = "3";
console.log(multiply(num1, num2), "6");
(num1 = "123"), (num2 = "456");
console.log(multiply(num1, num2), "56088");
