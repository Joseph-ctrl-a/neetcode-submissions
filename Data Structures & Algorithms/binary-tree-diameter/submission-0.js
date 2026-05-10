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
    diameterOfBinaryTree(root) {
        let diameter = 0

        const traverse = root => {
            if (!root) return 0
            const leftDepth = traverse(root.left)
            const rightDepth = traverse(root.right)
            
            diameter = Math.max(leftDepth + rightDepth, diameter)
            return Math.max(leftDepth, rightDepth) + 1
        }
        traverse(root)
        return diameter
    }
}

