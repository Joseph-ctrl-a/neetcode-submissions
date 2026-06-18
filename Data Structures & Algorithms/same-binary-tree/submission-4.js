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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        let isSame = true

        const dfs = (node1, node2) => {
            if (!isSame) return
            if (node1?.val !== node2?.val) isSame = false
            if (!node1 || !node2) return
            
            
            dfs(node1.left, node2.left)
            dfs(node1.right, node2.right)
        }
        dfs(p, q)
        return isSame
    }
}

