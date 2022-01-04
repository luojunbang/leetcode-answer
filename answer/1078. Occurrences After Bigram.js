/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  text = text.split(" ");
  return text.reduce((rs,str,i)=>text[i - 1] === second && text[i - 2] === first?[...rs,str]:rs,[])
};

let text = "alice is aa good girl she is a good student",
  first = "a",
  second = "good";
console.log(findOcurrences(text, first, second));
(text = "we will we will rock you"), (first = "we"), (second = "will");
console.log(findOcurrences(text, first, second));

text =
  "jkypmsxd jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa kcyxdfnoa jkypmsxd kcyxdfnoa";
first = "kcyxdfnoa";
second = "jkypmsxd";
console.log(findOcurrences(text, first, second));
