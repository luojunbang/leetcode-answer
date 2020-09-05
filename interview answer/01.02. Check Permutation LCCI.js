/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  return s1.length == s2.length &&
    [...s1]
      .every(str =>
        s2.indexOf(str) > -1 && (function () { s2 = s2.substring(0, s2.indexOf(str)) + s2.substring(s2.indexOf(str) + 1); return true })()
      )
};
console.log(CheckPermutation("abc", "bca"));
// console.log(CheckPermutation("jzvthzihsvghjhbrpfhdwixmyaxjrdzfvnhpmyrbqjpdffykqgahgzpjwvouurr"
//   , "hhqhxjyrghjjsmduaxppwrqkikqnfdrzjowapehtbyrgrfyprrfrebzduxvvhhu"));