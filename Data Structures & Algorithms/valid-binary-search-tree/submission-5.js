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
     * @return {boolean}
     */
    isValidBST(root) {
        let isValid = true
        let prev = null
        const inOrder = node => {
            if (!node || !isValid) return

            inOrder(node.left)
            if (!(node.val > prev) && prev !== null) isValid = false
            prev = node.val
            inOrder(node.right)
        }
        inOrder(root)
        return isValid
    }
}
