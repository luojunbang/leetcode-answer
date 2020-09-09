/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    return A.reduce((rs,i)=>{
        i%2==0?rs.unshift(i):rs.push(i)
        return rs
    },[])
};

console.log(sortArrayByParity([3, 1, 2, 4]));