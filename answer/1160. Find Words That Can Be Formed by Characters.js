/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let ans = 0, charsObj = {}
  function getCount(word) {
    let obj = {}
    Array.from(word).forEach(i => {
      obj[i] = obj[i] ? obj[i] + 1 : 1
    })
    return obj
  }
  Array.from(chars).forEach(i => {
    charsObj[i] = charsObj[i] ? charsObj[i] + 1 : 1
  })
  words.forEach(word => {
    let obj = getCount(word), canSpell = true
    for (let key in obj) {
      if (obj[key] > charsObj[key] || !charsObj[key]) {
        canSpell = false
      }
    }
    if (canSpell) ans += word.length
  })
  return ans
};
words = ["cat", "bt", "hat", "tree"], chars = "atach"
words2 = ["hello", "world", "leetcode"], chars2 = "welldonehoneyr"
console.log(countCharacters(words, chars));
console.log(countCharacters(words2, chars2));