/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let idx = bits.lastIndexOf(1), ary = bits.slice(0, idx + 1)
    return ary.slice(ary.lastIndexOf(0) + 1).length % 2 == 0 ? bits[bits.length - 1] == 0 : bits.slice(idx + 1).length >= 2
};
console.log(isOneBitCharacter([1, 1, 1, 0]));
console.log(isOneBitCharacter([1, 1, 1, 1, 0]));