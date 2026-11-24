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

        const dfs = (node, depth = 0) => {
            if (!node) return 

            depth += 1
            maxDepth = Math.max(depth, maxDepth)
            dfs(node.left, depth)
            dfs(node.right, depth)
        }

        dfs(root)
        return maxDepth
    }
}
