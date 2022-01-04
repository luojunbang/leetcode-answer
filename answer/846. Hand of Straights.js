/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  const l = hand.length;
  if (l % groupSize != 0) return false;
  const ans = {};
  hand.forEach((i) => {
    ans[i] = ans[i] ? ans[i] + 1 : 1;
  });
  console.log(ans);
  let key = Object.keys(ans);
  key.sort((a, b) => a - b);
  let idx = hand.length / groupSize;
  while (idx > 0 && key.length > 0) {
    console.log(key);
    const one = key.slice(0, groupSize);
    if (+one[0] + groupSize - 1 != +one[groupSize - 1]) return false;
    one.forEach((k, ii) => {
      ans[k] == 1 && console.log(k);
      ans[k]--;
    });
    key = key.filter((i) => ans[i] > 0);
    idx--;
  }
  return true;
};

(hand = [1, 2, 3, 2, 3, 5]), (groupSize = 3);
// (hand = [1, 2, 3, 4, 6, 7]), (groupSize = 2);
console.log(isNStraightHand(hand, groupSize));
