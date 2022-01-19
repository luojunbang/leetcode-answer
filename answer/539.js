/**
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const ans = {};
  for (let i of timePoints) {
    if (ans[i]) return 0;
    else ans[i] = 1;
  }
  const keyList = Object.keys(ans);
  const toMin = (time) => time.split(":")[0] * 60 + +time.split(":")[1];
  keyList.sort();
  return keyList.reduce((rs, item, idx) => {
    let dis;
    if (idx == 0)
      dis = Math.abs(toMin(keyList[keyList.length - 1]) - toMin(item));
    else dis = Math.abs(toMin(keyList[idx - 1]) - toMin(item));
    dis = dis > 1440 / 2 ? 1440 - dis : dis;
    return Math.min(rs, dis);
  }, Number.MAX_VALUE);
};

timePoints = ["00:00", "23:59"];
timePoints = ["00:00", "04:00", "22:00"];
console.log("findMinDifference(timePoints):", findMinDifference(timePoints));
