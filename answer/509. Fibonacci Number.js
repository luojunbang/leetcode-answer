/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  return N <= 1 ? N : fib(N - 1) + fib(N - 2)
};


console.log(fib(2));
