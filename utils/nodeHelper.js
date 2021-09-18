exports.ListNode = function (val,next) {
  this.val = val;
  this.next = next;
}
exports.logListNode= function(ListNode){
  let node  = ListNode
  const arr = [node.val]
  while(node.next){
    node=node.next
    arr.push(node.val)
  }
  return arr
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}