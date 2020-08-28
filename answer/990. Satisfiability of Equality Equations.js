
const input = ['a!=a']
const input2 = ['a!=b', 'b==a', 'c==a']
const input3 = ['a==b', 'b==a', 'c!=a', 'c==b']
const input4 = ["c==c", "f!=a", "f==b", "b==c"]
var equationsPossible = function (equations) {
  let res = []
  for (let i = 0; i < equations.length; i++) {
    const eq = equations[i]
    if (eq[1] === '=') {
      let left = eq[0], right = eq[3], leftIndex = -1, rightIndex = -1
      res.forEach((item, index) => {
        if (item.indexOf(left) > -1) leftIndex = index
        if (item.indexOf(right) > -1) rightIndex = index
      })
      if (leftIndex != -1 && rightIndex != -1) {
        if (leftIndex == rightIndex) { }
        if (leftIndex != rightIndex) {
          res[leftIndex] = [...res[leftIndex], ...res[rightIndex]]
          res.splice(rightIndex, 1)
        }
      }
      if (leftIndex == -1 && rightIndex == -1) {
        res.push([left, right])
      }
      if (leftIndex == -1 && rightIndex != -1) {
        res[rightIndex].push(left)
      }
      if (leftIndex != -1 && rightIndex == -1) {
        res[leftIndex].push(right)
      }
    }
  }
  for (let i = 0; i < equations.length; i++) {
    const eq = equations[i]
    if (eq[1] == '!') {
      let left = eq[0], right = eq[3]
      if (left == right) return false
      if (res.findIndex(item => {
        return item.indexOf(left) != -1 && item.indexOf(right) > -1
      }) != -1) {
        console.log(res);
        console.log(left, right);
        return false
      }
    }
  }
  return true
}
[input, input2, input3, input4].forEach(item => console.log(equationsPossible(item)))