/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  return startTime.reduce((res, time, idx) => res + ~~(time <= queryTime && endTime[idx] >= queryTime), 0);
};