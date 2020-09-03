/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let ans = []
  for (let i = 0; i < A[0].length; i++) {
    const word = A[0][i]
    if (A.map(str => str.indexOf(word)).some(i => i == -1)) continue
    else {
      A = A.map((item, idx) => item.substring(0, A[0]) + item.substr(A[0] + 1))
      ans.push(word)
    }
    console.log(A);
  }
  return ans
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool","lock","cook"]));