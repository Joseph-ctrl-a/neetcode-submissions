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
    diameter = 0
    diameterOfBinaryTree(root) {


        this.traverse(root)

        return this.diameter
    }

    traverse(root) {
        if (!root) return 0

        const leftDepth = this.traverse(root.left)
        const rightDepth = this.traverse(root.right)
       
        this.diameter = Math.max(leftDepth + rightDepth, this.diameter)
        return Math.max(leftDepth, rightDepth) + 1
    }
}

