/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let ans = [],str = A[0]
  for (let i = 0; i < str.length; i++) {
    let indexAry = A.map(item => item.indexOf(str[i]))
    if (indexAry.some(i => i == -1)) continue
    else {
      ans.push(str[i])
      A = A.map((item, idx) => item.substring(0, indexAry[idx]) + item.substr(indexAry[idx] + 1))
    }
  }
  return ans
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));