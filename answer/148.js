/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { arr2Tree, logListNode } = require("../utils/nodeHelper");

var sortList = function (head) {
  if (!head) return null;
  let ans = head;
  let cur = head.next;
  ans.next = null;
  while (cur) {
    console.log("cur.val:", cur.val);
    let temp = ans;
    if (temp.val > cur.val) {
        ans = cur;
        cur = cur.next;
        ans.next = temp;
      }
    while (temp) {
      temp = temp.next;
    }
    cur = cur.next;
    logListNode(ans);
  }
  return ans;
};

// logListNode(arr2Tree([4, 2, 1, 3]));
logListNode(sortList(arr2Tree([4, 2, 1, 3])));
