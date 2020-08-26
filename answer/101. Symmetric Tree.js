/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if(root===null) return true
  function compare(left,right){
      if(left===null&&right===null) return true
      if(left===null||right===null) return false
      return left.val===right.val&&compare(left.left,right.right)&&compare(left.right,right.left)
  }
  let left  = root.left,right=root.right
  return compare(left,right)
};