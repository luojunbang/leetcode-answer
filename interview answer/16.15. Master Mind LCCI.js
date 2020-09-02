/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
  let ans = 0, obj = {}, sObj = {}
  Array.from(guess).forEach((item, index) => {
    if (item === solution[index]) {
      ans++
    } else {
      sObj[solution[index]] = sObj[solution[index]] ? sObj[solution[index]] + 1 : 1
      obj[item] = obj[item] ? obj[item] + 1 : 1
    }
  })
  console.log(obj);
  console.log(sObj);
  return [ans, Object.keys(obj).reduce((res, key) => sObj[key] ? res + Math.min(obj[key], sObj[key]) : res, 0)]
};
solution = "RGBYRB", guess = "GGRRBR"
console.log(masterMind(solution, guess));
solution = "RGRB", guess = "BBBY"
console.log(masterMind(solution, guess));