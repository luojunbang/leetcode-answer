/**
 * 累加数
累加数 是一个字符串，组成它的数字可以形成累加序列。

一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。

说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const l = num.length;
  console.log("l:", l);
  for (let i = 0; i < l; i++) {
    const one = num.slice(0, i + 1);
    if (one.length > l - one.length) break;
    if (one[0] == "0" && one.length > 1) break;
    for (let j = i + 1; j < l; j++) {
      let two = num.slice(i + 1, j + 1);
      if (two[0] == "0" && two.length > 1) break;
      let remain = num.slice(j + 1);
      if (one.length > remain.length || two.length > remain.length) break;
      console.log('-------:',one, two, remain);
      let _one = one
      let result = (+_one + +two).toString();
      while (remain.length > 0 && result === remain.slice(0, result.length)) {
        remain = remain.slice(result.length);
        _one = two;
        two = result;
        result = (+_one + +two).toString();
        console.log(_one, two, result, remain);
      }
      if (remain == "") return true;
    }
  }
  return false;
};

// console.log(isAdditiveNumber("1123456123457"));
// console.log(isAdditiveNumber("12358"));
// console.log(isAdditiveNumber("02246101626"));
console.log(isAdditiveNumber("111122335588143"));
