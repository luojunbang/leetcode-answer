/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode } = require("../utils/nodeHelper");

const list1 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(2, new ListNode(4)));
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let l1 = list1,
    l2 = list2;
  let ans = undefined;
  if (!l1 && !l2) return null;
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  if (l1.val < l2.val) {
    ans = l1;
    l1 = l1.next;
  } else {
    ans = l2;
    l2 = l2.next;
  }
  ans.next = null;
  let temp = ans;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        temp.next = l1;
        l1 = l1.next;
      } else {
        temp.next = l2;
        l2 = l2.next;
      }
    } else {
      if (l1) {
        temp.next = l1;
        l1 = l1.next;
      }
      if (l2) {
        temp.next = l2;
        l2 = l2.next;
      }
    }
    temp = temp.next;
    temp.next = null;
  }
  console.log(JSON.stringify(ans));
  return ans;
};

mergeTwoLists(list1, list2);
