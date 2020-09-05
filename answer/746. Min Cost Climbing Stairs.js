/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let ans = 0, i = -1, step = []
  while (i + 2 < cost.length) {
    if (cost[i + 1] >= cost[i + 2]) {
      ans += cost[i + 2]
      step.push(i + 2)
      i += 2
    } else {
      ans += cost[i + 1]
      step.push(i + 1)
      i += 1
    }
  }
  console.log(step);
  return ans
};
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
[1, 1, 100, 1]
cost = [0, 1, 2, 2]
console.log(minCostClimbingStairs(cost));