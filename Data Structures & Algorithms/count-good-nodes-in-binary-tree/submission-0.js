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
    goodNodes(root) {
        let res = 0

        const dfs = (node, maxValue) => {
            if (!node) return
            if (node.val >= maxValue) res++

            const newMax = Math.max(maxValue, node.val)
            dfs(node.left, newMax)
            dfs(node.right, newMax)
        }
        dfs(root, root.val)
        return res
    }
}