/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let ans = []
    for (let i = 1; i <= n; i++) {
        ans.push(Array.from(i.toString()).reduce((rs, i) => rs + +i, 0))
    }
    let obj = {}
    ans.forEach(i => { obj[i] = ~~obj[i] + 1 })
    let max = Math.max(...Object.values(obj))
    return Object.values(obj).filter(i=>i==max).length
};

console.log(countLargestGroup(13));
console.log(countLargestGroup(15));