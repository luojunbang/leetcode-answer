/**
 * @param {number[]} ages
 * @return {number}
 */
 var numFriendRequests = function(ages) {
    ages.sort((a, b) => a - b);
    let left = 0, right = 0, ans = 0;
    for (const age of ages) {
        if (age < 15) {
            continue;
        }
        while (ages[left] <= 0.5 * age + 7) {
            left++;
        }
        while (right + 1 < ages.length && ages[right + 1] <= age) {
            right++;
        }
        ans += right - left;
    }
    return ans;
};
console.log(numFriendRequests([16, 16]));
let ages = [20, 30, 100, 110, 120];
console.log(numFriendRequests(ages));
ages = [16,17,18]
console.log(numFriendRequests(ages));

