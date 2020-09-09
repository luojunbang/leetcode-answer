/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    return nums.reduce((rs,num,i)=>{
        nums.slice(i+1).forEach((item,index)=>{
            (num===item)&&rs.push([i,index])
        })
        return rs
    },[]).length
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));