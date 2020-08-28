/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5); let a = head.next.next.next.next
head.next.next.next.next.next = new ListNode(6)
head.next.next.next.next.next.next = new ListNode(7)
head.next.next.next.next.next.next.next = new ListNode(8)
head.next.next.next.next.next.next.next.next = new ListNode(9)
head.next.next.next.next.next.next.next.next.next = a
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head, slow = head
  while (true) {
    if (!fast || !slow || !fast.next || !fast.next.next || !slow.next) return null
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }
  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};
console.log(detectCycle(head));