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
     * @return {boolean}
     */
    balanced = true
    isBalanced(root) {
        this.traverse(root)
        return this.balanced
    }
    traverse(root) {
        if (!root) return 0
        if (!this.balanced) return 0

        const leftDepth = this.traverse(root.left)
        const rightDepth = this.traverse(root.right)

        const difference = Math.abs(rightDepth - leftDepth)

        if (difference > 1) this.balanced = false

        return Math.max(leftDepth, rightDepth) + 1
    }
}
