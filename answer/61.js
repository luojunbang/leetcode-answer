const { arr2Tree, logListNode } = require("../utils/nodeHelper");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 61. 旋转链表
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let total = 0;
  let h = head;
  while (h && (h.val || h.val === 0)) {
    total++;
    h = h.next;
  }
  if (total == 0) return null;
  k = k % total;
  console.log(total, k);
  if (k == 0) return head;
  let idx = total - k;
  h = head;
  while (idx > 1) {
    h = h.next;
    idx--;
  }
  const ans = h.next;
  h.next = null;
  logListNode(h);
  h = ans;
  while (h && h.next) {
    h = h.next;
  }
  h.next = head;
  return ans;
};

logListNode(rotateRight(arr2Tree([1, 2, 3, 4, 5]), 7));
logListNode(
  rotateRight(arr2Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 20)
);

// rotateRight();
