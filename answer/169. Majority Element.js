/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {},ans = null
    nums.some(i=>{
        obj[i] = ~~obj[i]+1
        if(obj[i]>(nums.length/2)){
            ans = i
            return true
        }else return false
    })
    return ans
};

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([3,2,3]));