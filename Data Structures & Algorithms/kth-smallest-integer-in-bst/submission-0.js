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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = k
        let res = root.val
        const dfs = node => {
            if (count === 0 || !node) return

            dfs(node.left)
            count = count - 1
            if (count === 0) {
                res = node.val
                console.log(node.val)
                return
            }
            dfs(node.right)
        }
        dfs(root)
        return res
    }
}
// Given the root of a bst, and an interger k
// return: kth smallest (1- indexed)
[1,2,3] 