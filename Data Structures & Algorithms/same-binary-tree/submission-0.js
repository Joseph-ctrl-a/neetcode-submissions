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
    same = true

    isSameTree(p, d) {

        const dfs = (rootP, rootD) => {
            if (!this.same) return 
            if (!(rootP?.val === rootD?.val)) this.same = false
            if (!rootP || !rootD) return

            dfs(rootP.left, rootD.left)
            dfs(rootP.right, rootD.right)
        }
        dfs(p, d)
        return this.same
    }
}
