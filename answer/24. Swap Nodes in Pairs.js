//Definition for singly-linked list.
const { ListNode, logListNode } = require("../utils/nodeHelper");

const listNode1 = new ListNode(
  0,
  new ListNode(
    0,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(7))))
  )
);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  console.log("ORIGIN:", logListNode(head));
  if (!head || !head.next) return head;
  const f = head,
    l = f.next,
    next = l.next;
  let ret = head.next;
  f.next = next;
  l.next = f;
  let node = f
  while (node.next && node.next.next) {
    const f = node.next,
      l = f.next,
      next = l.next;
    node.next = l;
    f.next = next;
    l.next = f;
    console.log(node.next.val);
    node = f;
  }
  return ret;
};

console.log(logListNode(swapPairs(listNode1)));
