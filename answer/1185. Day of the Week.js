/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(`${year}/${month}/${day}`).getDay()]
};

console.log(dayOfTheWeek(31,8,2019)==='Saturday')
console.log(dayOfTheWeek(18,7,1999)==='Sunday')
console.log(dayOfTheWeek(15,8,1993)==='Sunday')