/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples2 = function (apples, days) {
  let ans = 0,
    remainApples = [];
  const eatApple = (_) => {
    if (remainApples.length == 0) return;
    let temp = [];
    ans++;
    remainApples.slice(1).forEach((count, n) => {
      if (count < 2) return;
      else {
        temp.push(count - 1);
      }
    });
    remainApples = temp;
  };
  apples.forEach((n, i) => {
    const idx = remainApples.findIndex((r) => r >= days[i]);
    if (idx == -1) remainApples.push(...new Array(n).fill(days[i]));
    else remainApples.splice(idx, 0, ...new Array(n).fill(days[i]));
    eatApple();
    // console.log(remainApples);
  });
  while (remainApples[0]) {
    eatApple();
  }
  return ans;
};

var eatenApples = function (apples, days) {
  const d = Date.now();
  let ans = 0,
    remainApples = [];
  let day = 0;
  const eatApple = (_) => {
    day++;
    if (remainApples.length == 0) return;
    if (remainApples[0].count > 1) remainApples[0].count -= 1;
    else remainApples.shift();
    ans++;
    remainApples = remainApples.filter((i) => i.remain - day > 0);
  };
  apples.forEach((n, i) => {
    if (n == 0) {
    } else {
      const idx = remainApples.findIndex((r) => r.remain >= i + days[i]);
      if (idx == -1) remainApples.push({ count: n, remain: i + days[i] });
      else remainApples.splice(idx, 0, { count: n, remain: i + days[i] });
    }
    eatApple();
  });
  while (remainApples.length > 0) {
    eatApple();
  }
  console.log("usage:", Date.now() - d, "ms");
  return ans;
};

let apples = [1, 2, 3, 5, 2],
  days = [3, 2, 1, 4, 2];
// console.log(eatenApples(apples, days));
// apples = [1, 0, 0, 0, 1];
// days = [1, 0, 0, 0, 2];
// console.log(eatenApples(apples, days));
// apples = [10, 1, 1, 1, 2];
// days = [100, 1, 1, 1, 2];
// console.log(eatenApples(apples, days));
apples = [
  1, 10, 17, 10, 12, 6, 20, 8, 8, 22, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 23,
];
days = [
  19999, 11, 18, 22, 5, 2, 14, 5, 20, 7, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1, 4, 2, 7, 0, 0, 0, 0, 0, 0, 1,
];
console.log(eatenApples(apples, days));
