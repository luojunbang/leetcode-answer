/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  return queries.map(([val, index]) => {
    A[index] += val
    return A.filter(i => i % 2 == 0).reduce((res, i) => res + i, 0)
  })
};
A = [1, 2, 3, 4], queries = [[1, 0], [-3, 1], [-4, 0], [2, 3]]
console.log(sumEvenAfterQueries(A, queries));