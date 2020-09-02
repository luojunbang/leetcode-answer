/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let ans = 0, res = [] //[a+b,|a-b|]
  const condition = ([a, b], [c, d]) => a == c && b == d || a == d && b == c
  for (let i = 0; i < dominoes.length; i++) {
    let sum = dominoes[i][0] + dominoes[i][1], dis = Math.abs(dominoes[i][0] - dominoes[i][1])
    res.findIndex(item => item[0] == sum && item[1] == dis) != -1 && ans++;
    res.push([sum, dis])
  }
  return ans
};
var numEquivDominoPairs = function (dominoes) {
  const ary = dominoes.map(item => `${item[0] + item[1]}, ${Math.abs(item[0] - item[1])}`)
  let obj = {}, ans = 0
  ary.forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1 : 1
  })
  for (let key in obj) {
    ans += obj[key] != 0 ? (obj[key] * obj[key] - obj[key]) / 2 : 0
  }
  return ans
};
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]));
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]));
