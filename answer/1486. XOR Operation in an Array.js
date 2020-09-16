/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    return new Array(n).fill(start).map((i,idx)=>i+idx*2).reduce((rs,i)=>rs^i)
    console.log(ary);
};

n = 5, start = 0
n = 10, start = 5
console.log(xorOperation(n, start));