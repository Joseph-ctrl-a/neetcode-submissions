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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let isSub = false
        const dfs = node => {
            if (!node) return
            if (isSub) return
            if (this.isSame(node, subRoot)) isSub = true
            

            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        return isSub
    }

    isSame(node1, node2) {
        let isSame = true

        const dfs = (node1, node2) => {
            
            if (!isSame) return
            if (node1?.val !== node2?.val) isSame = false
            if (!node1 || !node2) return
            
            dfs(node1.left, node2.left)
            dfs(node1.right, node2.right)
        }
        dfs(node1, node2)
        return isSame
    }
}