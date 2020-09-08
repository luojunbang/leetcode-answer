/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let sum = 0, temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == temp) sum++
        else {
            if (sum / arr.length > 0.25) return temp
            else {
                sum = 1
                temp = arr[i]
            }
        }
    }
    return temp
};

arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
console.log(findSpecialInteger(arr));
arr = [1, 1]
console.log(findSpecialInteger(arr));