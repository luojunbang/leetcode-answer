/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let map = new Array(60).fill(0),ans = 0
    time.forEach(i=>{
      map[i%60]++
    })
    ans+= (map[0]*map[0]-map[0])/2 //0 C 2/60
    ans+= (map[30]*map[30]-map[30])/2 
    let i=1,j=59
    while(i<j){ //C 1/i * C 1/j
      ans+=map[i]*map[j]
      i++;
      j--;
    }
    return ans
};

console.log(numPairsDivisibleBy60([50,10,10,10,50]));
