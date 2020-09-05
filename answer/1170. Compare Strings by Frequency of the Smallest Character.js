/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const func = (str) => str.split("").reduce((obj, i) => [obj[0] > i ? i : obj[0], obj[0] > i ? 1 : obj[0] == i ? obj[1] + 1 : obj[1]]
    , ['z', 0])[1]
  w = words.map(func)
  return queries.map(func).map(i => w.filter(s => i < s).length)
};
queries = ["cbd"], words = ["zaaaz"]
// console.log(numSmallerByFrequency(queries, words));
queries = ["bbb", "cc"], words = ["a", "aa", "aaa", "aaaa"]
// console.log(numSmallerByFrequency(queries, words));
queries = ["bba", "abaaaaaa", "aaaaaa", "bbabbabaab", "aba", "aa", "baab", "bbbbbb", "aab", "bbabbaabb"]
words = ["aaabbb", "aab", "babbab", "babbbb", "b", "bbbbbbbbab", "a", "bbbbbbbbbb", "baaabbaab", "aa"]
console.log(numSmallerByFrequency(queries, words));
