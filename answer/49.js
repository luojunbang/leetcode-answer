/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  return Object.values(
    strs.reduce((rs, str, idx) => {
      const ary = str.split("");
      ary.sort();
      const s = ary.join("");
      rs[s] ? rs[s].push(str) : (rs[s] = [str]);
      return rs;
    }, {})
  );
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
strs = [""]
console.log(groupAnagrams(strs));
