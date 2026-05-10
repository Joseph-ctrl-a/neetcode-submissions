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

        const traverse = (root, depth) => {
            if (!root) return
            const newDepth = depth + 1
            maxDepth = Math.max(maxDepth, newDepth)
            traverse(root.left, newDepth)
            traverse(root.right, newDepth)
        }

        traverse(root, maxDepth)
        return maxDepth
    }
}
