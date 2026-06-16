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
     * @return {number}
     */
    maxDepth(root) {
        let maxDepth = 0
        const preOrder = (node, depth=1) => {
            if (!node) return

            maxDepth = Math.max(maxDepth, depth)
            preOrder(node.left, depth + 1)
            preOrder(node.right, depth + 1) 
        }
        preOrder(root)
        return maxDepth
    }
}
