/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [], ary = [root]
  while (ary.some(item => item !== null)) {
    res.push(ary)
    let cachesAry = []
    ary.forEach(item => {
      if(!item) return
      ['left','right'].forEach(key=>item[key]&&cachesAry.push(item[key]))
    })
    ary = cachesAry
  }
  return res.map(item=>item.map(tree=>tree.val))
};
console.log(levelOrder(root));