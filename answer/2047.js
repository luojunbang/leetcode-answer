/**
句子仅由小写字母（'a' 到 'z'）、数字（'0' 到 '9'）、连字符（'-'）、标点符号（'!'、'.' 和 ','）以及空格（' '）组成。每个句子可以根据空格分解成 一个或者多个 token ，这些 token 之间由一个或者多个空格 ' ' 分隔。

如果一个 token 同时满足下述条件，则认为这个 token 是一个有效单词：

仅由小写字母、连字符和/或标点（不含数字）。
至多一个 连字符 '-' 。如果存在，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
至多一个 标点符号。如果存在，标点符号应当位于 token 的 末尾 。
这里给出几个有效单词的例子："a-b."、"afad"、"ba-c"、"a!" 和 "!" 。

给你一个字符串 sentence ，请你找出并返回 sentence 中 有效单词的数目 。

 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  return sentence.split(/\s+/).filter((item) => {
    if (/\d+/.test(item)) return false;
    if (
      item.includes("-") &&
      (item[0] == "-" ||
        item[item.length - 1] == "-" ||
        item.replace("-", "").length + 1 != item.length)
    )
      return false;
    const mark = ["!", ".", ","];
    if (mark.some((i) => item.includes(i))) {
      if (/^[a-z]+[i.,]{2}$/.test(item)) return false;
    }
    console.log(item);
    return true;
  }).length;
};

sentence = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener. 1-s !this";
console.log(countValidWords(sentence));
