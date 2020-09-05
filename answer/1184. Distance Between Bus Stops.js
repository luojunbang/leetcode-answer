/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
0, 1, 2, 3, 0, 1, 2, 3
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start == destination) return 0
  let ary = distance.map((i, idx) => idx)
  ary = [...ary, ...ary]
  ary = ary.slice(ary.indexOf(start), ary.lastIndexOf(start) + 1)
  return Math.min(
    ...[ary.slice(0, ary.indexOf(destination)), ary.slice(ary.indexOf(destination), ary.length - 1)]
      .map(item => item.reduce((rs, i) => rs + distance[i], 0)))
};
var distanceBetweenBusStops = function (distance, start, destination) {
  return start > destination ?
    distanceBetweenBusStops(distance, destination, start) :
    Math.min(...[distance.slice(start, destination), [...distance.slice(destination), ...distance.slice(0, start)]].map(item => item.reduce((rs, i) => rs + i, 0)))
};
distance = [1, 2, 3, 4], start = 0, destination = 1
console.log(distanceBetweenBusStops(distance, start, destination));
distance = [1, 2, 3, 4], start = 0, destination = 2
console.log(distanceBetweenBusStops(distance, start, destination));
distance = [1, 2, 3, 4], start = 0, destination = 3
console.log(distanceBetweenBusStops(distance, start, destination));
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));