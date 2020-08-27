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
root.right.right.right = new TreeNode(10)
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  let res = 1
  let temp = [root]
  while (temp.some(item => item && (item.left || item.right))) {
    let cache = temp.reduce((res, item) => {
      if (!item) return res
      res.push(item.left, item.right)
      return res
    }, [])
    temp = cache
    res++
  }
  return res
};
console.log(maxDepth(root));
