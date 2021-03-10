/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return accounts.reduce((rs, account) => Math.max(account.reduce((sum, num) => sum + num, 0), rs), 0)
};

console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));