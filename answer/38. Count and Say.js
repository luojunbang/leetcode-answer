/**
 * @param {number} n
 * @return {string}
 */


var countAndSay = function (n) {
  if (n === 1) return 1;
  const toSay = (str) => {
    str = str.toString().split("");
    let lastStr = str[0],
      count = 0;
    return str.reduce((rs, s, idx) => {
      if (lastStr === s) {
        count += 1;
      } else {
        rs += "" + count + "" + lastStr;
        lastStr = s;
        count = 1;
      }
      if (idx === str.length - 1) {
        rs += "" + count + "" + lastStr;
      }
      return rs;
    }, "");
  };
  let res = 1
  while(n>1){
      n--
      res = toSay(res)
  }
  return res
};



console.log(countAndSay(6));
