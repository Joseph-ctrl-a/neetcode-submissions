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
    same = false
    isSubtree(root, subRoot) {
        const dfs = (root, sub) => {
            if (!root) return
            if (this.same) return
            if (root.val === sub.val) {
                this.validSubTree(root, sub)
            }
            if (this.same) return
            dfs(root.left, sub)
            dfs(root.right, sub)
        }
       dfs(root, subRoot)
       return this.same
    }
    validSubTree(root, subRoot) {
        let validSubTree = true

        const isSame = (root, subRoot) => {
            if (!validSubTree) return
            if (root?.val !== subRoot?.val) validSubTree = false
            if (!root || !subRoot) return 
            isSame(root.left, subRoot.left)
            isSame(root.right, subRoot.right)
        }
        isSame(root, subRoot)
        if (validSubTree) {
            this.same = true
        }
    }
}
