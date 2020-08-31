/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(nums.length==0) return -1
  if(nums.length==1) return nums[0]
  let cache = {}
  nums.forEach(item=>{
    cache[item]=cache[item]?cache[item]+1:1
  })
  const max = Math.max(...Object.keys(cache).map(item=>cache[item]))
  console.log(max);
};

console.log(majorityElement([1,2,5,9,5,9,5,5,5])===5);
console.log(majorityElement([2,2,1,1,1,2,2])===2);
console.log(majorityElement([3,2])===-1);