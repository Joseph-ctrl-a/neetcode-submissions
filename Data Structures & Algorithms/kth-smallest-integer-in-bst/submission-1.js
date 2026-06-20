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
        let res
        const inOrder = node => {
            if (!node || !k) return
            inOrder(node.left)
            k--
            if(!k) res = node.val
            inOrder(node.right)
        }
        inOrder(root)
        return res
    }
}
