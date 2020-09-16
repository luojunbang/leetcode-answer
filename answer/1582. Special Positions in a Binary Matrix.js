/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let ans = 0
    mat.forEach(nums => {
        if(nums.join('').split(1).length==2){
            const idx = nums.indexOf(1)
            mat.map(i => i[idx]).filter(i => i == 1).length == 1 && ans++
        }
    })
    return ans
};
mat = [[1, 0, 0],
[0, 0, 1],
[1, 0, 0]]
mat = [[1, 0, 0],
[0, 1, 0],
[0, 0, 1]]
mat = [[0, 0, 0, 1],
[1, 0, 0, 0],
[0, 1, 1, 0],
[0, 0, 0, 0]]
mat = [[0, 0, 0, 0, 0],
[1, 0, 0, 0, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 1, 1]]
console.log(numSpecial(mat));