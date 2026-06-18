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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {

        const dfs = node => {

            if (!node) return null

            const nVal = node.val
            const pVal = p.val
            const qVal = q.val

            if ((nVal > pVal && nVal < qVal)) return node
            if (nVal > qVal && nVal < pVal) return node
            if (nVal === qVal || nVal === pVal) return node
            if (nVal > qVal && nVal > pVal) {
                return dfs(node.left)
            } else {
                return dfs(node.right)
            }
        }
        return dfs(root)
    }
}
