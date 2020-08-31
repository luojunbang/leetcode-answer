/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true
  let res = 0
  let str = flowerbed.join("").replace(/^00/, (rs) => { res++; return '10' }).replace(/00$/, (rs) => { res++; return '01' })
  while (true) {
    str = str.replace(/1000/, () => { res++; return '1010' })
    if (res >= n) return true
    if (!/1000/.test(str)) return false
  }
};

flowerbed = [1, 0, 0, 0, 1, 0, 0], n = 2
flowerbed = [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], n = 3
flowerbed = [1, 0, 0, 0, 0, 0, 1], n = 2
flowerbed = [0], n = 1
flowerbed = [0,0,0], n = 2
// flowerbed = [1, 0, 0, 0, 1], n = 1
console.log(canPlaceFlowers(flowerbed, n));