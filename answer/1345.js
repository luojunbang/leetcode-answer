/**
给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

每一步，你可以从下标 i 跳到下标：

i + 1 满足：i + 1 < arr.length
i - 1 满足：i - 1 >= 0
j 满足：arr[i] == arr[j] 且 i != j
请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

注意：任何时候你都不能跳到数组外面。

 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  let ans = arr.length - 1;
  return ans;
};

arr = [7, 6, 9, 6, 9, 6, 55, 9, 7, 10, 12, 134, 55, 134, 12, 55];

console.log("minJumps(arr):", minJumps(arr));
