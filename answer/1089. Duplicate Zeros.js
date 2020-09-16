/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let i =0
    while(i<arr.length){
        if (arr[i] == 0) {
            arr.splice(i, 0, 0)
            arr.pop()
            i += 1
        }
        i++
    }
};
arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])
console.log(arr);
