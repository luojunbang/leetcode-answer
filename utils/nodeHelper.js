exports.ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  return this;
};

exports.arr2Tree = function (ary) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    return this;
  }
  const ans = new ListNode(ary[0]);
  let idx = 1;
  let temp = ans;
  while (idx < ary.length) {
    temp.next = new ListNode(ary[idx]);
    temp = temp.next;
    idx++;
  }
  return ans;
};
exports.logListNode = function (ListNode) {
  let node = ListNode;
  if (!node) {
    console.log([]);
    return;
  }
  const arr = [node.val];
  while (node.next) {
    node = node.next;
    arr.push(node.val);
  }
  console.log(arr);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
