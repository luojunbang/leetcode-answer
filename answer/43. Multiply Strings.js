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
  if (num1 == "0" || num2 == "0") return "0";
  let l1 = num1.length - 1;
  const res = [];
  while (l1 >= 0) {
    const n1 = num1[l1];
    let jinwei = 0;
    const row = "0".repeat(num1.length - 1 - l1).split("");
    let l2 = num2.length - 1;
    while (l2 >= 0) {
      const n2 = num2[l2];
      const temp = +n1 * +n2 + jinwei;
      row.unshift((temp % 10).toString());
      jinwei = ~~(temp / 10);
      l2--;
    }
    if (jinwei != 0) row.unshift(jinwei.toString());
    res.push(row.join(""));
    l1--;
  }
  return res.reduce((rs, i) => addStrings(rs, i));
};

let num1 = "2",
  num2 = "3"; 
console.log(multiply(num1, num2), "6");
(num1 = "123"), (num2 = "456");
console.log(multiply(num1, num2), "56088");
(num1 = "993"), (num2 = "456");
console.log(multiply(num1, num2), "452808");
(num1 = "999"), (num2 = "999");
console.log(multiply(num1, num2), "998001");
(num1 = "999999999999"), (num2 = "99");
console.log(multiply(num1, num2), "998001");
