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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = {}
        let i = 0
        inorder.forEach((num, j) => map[num] = j)

        const constructTree = (h, k) => {
            if (h > k ) return null
            const split = map[preorder[i]] 
            const root = new TreeNode(preorder[i])
            i++
            root.left = constructTree(h, split - 1)// Build Left Side 
            root.right = constructTree(split + 1, k) // Build Right Side
            return root
        }
        return constructTree(0, inorder.length - 1)
    }
}

