/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
            if (!root) {
                root = new TreeNode(val)
                return root
            }
        const insert = node => {
            if (!node) return 
            if (node.val > val) {
                if (!node.left) {
                    node.left = new TreeNode(val)
                    return
                    }
                insert(node.left)
            }
            if (node.val < val) {
                if (!node.right) {
                    node.right = new TreeNode(val)
                    return 
                }
                insert(node.right)
            }
        }
        insert(root)
        return root
    }
}
