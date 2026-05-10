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
     * @return {number[]}
     */
    rightSideView(root) {
        const depthSeen = new Set()
        const res = []

        const dfs = (root, depth) => {
            if (!root) return
            if (!depthSeen.has(depth)) {
                res.push(root.val)
            }
            depthSeen.add(depth)
            dfs(root.right, depth + 1)
            dfs(root.left, depth + 1)
        }
        dfs(root, 1)
        return res
    }
}
